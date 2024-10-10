import bcrypt from "bcrypt";
import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";

const userSignin = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      res.send("All fields are required");
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.send("User does not exist ");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(404).json({ message: "Login Failed" });
    }

    const token = jwt.sign({ _id: user_id.toString() }, process.env.JWT_SECRET);
    const userResponse = user.toObject();
    delete userResponse.password;
    res.status(200).json({ user: userResponse, token });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const userSignup = async (req, res) => {
  const { fullname, username, password } = req.body;
  try {
    if (!fullname || !username || !password) {
      return res.status(404).json({ message: "All fields required" });
    }

    const userExist = await User.findOne({ username });
    if (userExist) {
      return res.status(400).json({ message: "User all ready exist" });
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const user = new User({
      fullname,
      username,
      password: passwordHashed,
    });

    await user.save();

    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET
    );

    const userResponse = user.toObject();
    delete userResponse.password;

    res.status(201).json({ user: userResponse, token });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export { userSignin, userSignup };
