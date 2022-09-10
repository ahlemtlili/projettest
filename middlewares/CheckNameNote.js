const checkNameMatiere = (req, res, next)=>{
    if(!req.body.nameMatiere){ return res.status(400).send("name of subject is required")}
    next()

}

module.exports= checkNameMatiere