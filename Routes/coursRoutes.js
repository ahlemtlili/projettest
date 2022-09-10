const express = require("express");
const Cours = require("../models/cours");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const upload=require("../utils/multer");
const cours = require("../models/cours");
const CheckNamecours = require("../middlewares/CheckNamecours");
const isAdminEns = require("../middlewares/isAdminEns");
//add course 
router.post("/addCourse",upload("cours").single("pdfcours"),isAuth(),CheckNamecours,isAdminEns, async (req, res) => {
  console.log(req.file)
  const url = `${req.protocol}://${req.get('host')}`;
 // console.log(req.file);
 const { file } = req;
  try {
    const searchCourse=await Cours.findOne({nameCours:req.body.nameCours})
    if(searchCourse)
    {return res.status(400).send({msg:"name must be unique"})}
    const newCourse = new Cours({ ...req.body,enseignant:req.user._id });
    newCourse.urlcours = `${url}/${file.path}`;
    await newCourse.save();
    res.send({newCourse,msg:"the course is successfully added"})
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message)
  }
});
// get all course
router.get("/",isAuth(),async(req,res)=>{
    try {
     const allcourses=await Cours.find().populate("enseignant")
     res.send(allcourses)  
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to get")
    }
})
// delete course 
router.delete("/:id",isAuth(),isAdmin,async(req,res)=>{
    try {
      const courseDeleted=await Cours.deleteOne({_id:req.params.id})  
      if(courseDeleted.deletedCount){return res.send({msg:"course deleted "})}
      res.status(400).send({msg:"already deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to delete") 
    }
})
// delete course teacher
router.delete("/deleteTeacher/:id",isAuth(),async(req,res)=>{
  try {
    const trueTeacher= await Cours.findOne({_id:req.params.id});
    console.log(trueTeacher)
    if(trueTeacher.enseignant.toString() != req.user._id)
 {return  res.status(400).send("user unauthorized")}

    const courseDeleted=await Cours.deleteOne({_id:req.params.id})  
    if(courseDeleted.deletedCount){return res.send({msg:"course deleted "})}
    res.status(400).send({msg:"already deleted"})
    }
   catch (error) {
      console.log(error)
      res.status(400).send("delete failed") 
  }
})

// update course 
router.put("/:id",upload("cours").single("pdfcours"),isAuth(),isAdmin,async(req,res)=>{
  const url = `${req.protocol}://${req.get('host')}`;
  const {file} = req;
  try {  
 if(file){
  const urlcours =`${url}/${file.path}`;
    result=await Cours.updateOne({_id:req.params.id},{$set:{...req.body,urlcours}})}
    else
    { result=await Cours.updateOne({_id:req.params.id},{$set:{...req.body}})}
    const courseUpdated=await Cours.findOne({_id:req.params.id})
   if(result.modifiedCount){return res.send({msg:"course updated ",courseUpdated})}
       res.status(400).send({msg:"already updated"})
   } catch (error) {
     console.log(error)
     res.status(400).send("failed to update")
   }
 })
  
// update course teacher
router.put("/updateTeacher/:id",upload("cours").single("pdfcours"),isAuth(),async(req,res)=>{
  const url = `${req.protocol}://${req.get('host')}`;
  const {file} = req;
  try {
    const trueTeacher= await Cours.findOne({_id:req.params.id});
    if(trueTeacher.enseignant.toString() != req.user._id)
 {return  res.status(400).send("user unauthorized")}
 if(file){
  const urlcours =`${url}/${file.path}`;
    result=await Cours.updateOne({_id:req.params.id},{$set:{...req.body,urlcours}})}
   else
   { result=await Cours.updateOne({_id:req.params.id},{$set:{...req.body}})}
   const courseUpdated=await Cours.findOne({_id:req.params.id})
  if(result.modifiedCount){return res.send({msg:"course updated ",courseUpdated})}
      res.status(400).send({msg:"already updated"})
  } catch (error) {
    console.log(error)
    res.status(400).send("failed to update")
  }
})
router.get("/details/:id",isAuth(),async(req,res)=>{
  try {
     const oneCours=await Cours.findOne({_id:req.params.id}) 
     res.send({oneCours})  
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to get the cours")
    }
 
}
)

module.exports = router;
