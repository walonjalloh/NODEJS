const bodyChecker = (req,res,next) => {
    if(!req.body.moviename || !req.body.yearrelease || !req.body.duration ){
        return res.status(400).json({
            status:'fail',
            message: 'Not a valid movie data'
        })
    }
    next()
}

export default bodyChecker