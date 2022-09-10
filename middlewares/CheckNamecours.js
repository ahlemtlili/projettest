const CheckNamecours = (req, res, next)=>{
    if(!req.body.nameCours){ return res.status(400).send("name  of course is required")}
    next()

}

module.exports= CheckNamecours