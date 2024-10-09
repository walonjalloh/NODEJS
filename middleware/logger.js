const logger = function(req,res,next){
    console.log('custom middleware called')
    next()
}

export default logger