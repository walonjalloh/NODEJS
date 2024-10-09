const requestedAt = function(req,res,next){
    req.requestedAt = new Date().toISOString()
    next()
}

export {
    requestedAt
}