const express = require("express");
const Note = require("../models/note");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const isEns = require("../middlewares/isEns");
const checkNameMatiere= require("../middlewares/CheckNameNote")

//add note 
router.post("/addnote",isAuth(),isEns,checkNameMatiere,async (req, res) => {
  try {
    //const searchNote=await Note.findOne({nameMatiere:req.body.nameMatiere})
    //if(searchNote)
    //{return res.status(400).send({msg:"name of subject must be unique"})}
    const newNote = new Note({ ...req.body,enseignant:req.user._id });
    console.log(req.user._id);
    await newNote.save();
    res.send({newNote,msg:"the Note is successfully added"})
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message)
  }
});
// get all notes
router.get("/",isAuth(),async(req,res)=>{
    try {
     const allNotes=await Note.find().populate("enseignant").populate("children")
     res.send(allNotes)  
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to get")
    }
})
// delete note
router.delete("/:id",isAuth(),async(req,res)=>{
    try {
      const NoteDeleted=await Note.deleteOne({_id:req.params.id})  
      if(NoteDeleted.deletedCount){return res.send({msg:"note deleted "})}
      res.status(400).send({msg:"already deleted"})
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to delete") 
    }
})

// update Note 
router.put("/:id",isAuth(),async(req,res)=>{
  try {
   const result=await Note.updateOne({_id:req.params.id},{$set:{...req.body}})
   const noteUpdated=await Note.findOne({_id:req.params.id})

     if(result.modifiedCount){return res.send({msg:"Note updated ",noteUpdated})}
      res.status(400).send({msg:"already updated"})
  } catch (error) {
    console.log(error)
    res.status(400).send("failed to update")
  }
})
router.get("/noteEleve",isAuth(),async(req,res)=>{
  try {
     const noteseleve=await Note.find({children:req.user.children}).populate("enseignant").populate("children") 
    
     res.send({noteseleve})  
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to get the pupil")
    }
 
}
)
// details note
router.get("/details/:id",isAuth(),async(req,res)=>{
  try {
     const oneNote=await Note.findOne({_id:req.params.id}) 
     res.send({oneNote})  
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to get the note")
    }
 
}
)

module.exports = router;