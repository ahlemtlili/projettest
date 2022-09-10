const checkName = (req, res, next)=>{
    if(!req.body.firstName){ return res.status(400).send("name is required")}
    next()

}

module.exports= checkName