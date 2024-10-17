import bcrypt from "bcrypt";
import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";


const userSignin = async (req, res,next) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.send("All fields are required");
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid Login Credentials" }); // Use 401 for unauthorized
    }

    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
      'expiresIn':"20m",
    });
    const userResponse = user.toObject();
    delete userResponse.password;

    res.cookie("auth",token, {
      maxAge: 24 * 60 * 60 * 1000,
      httpOnly:true,
      sameSite:"None"
    })
    res.send('cookie sent')
    next()
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" }); // Generic error message
  }
};

const userSignup = async (req, res,next) => {
  const { fullname, username, password } = req.body;
  try {
    if (!fullname || !username || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const userExist = await User.findOne({ username });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const user = new User({
      fullname,
      username,
      password: passwordHashed,
    });

    await user.save();

    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({ user: userResponse, token });
    next()
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllUser = async (req, res,next) => {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      return res.status(200).json({ message: 'No users at the moment' });
    }

    res.status(200).json(users);
    next()
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { userSignin, userSignup, getAllUser };