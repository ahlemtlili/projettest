const isAdminEns = (req, res, next)=>{
    if(req.user.role=="admin" || req.user.role=="enseignant"){ next()}
    else
    {res.status(401).send("you are not authorized to add course")}
    

}

module.exports= isAdminEns