const express = require("express");
const User = require("../models/user");
const Note = require("../models/note");
const Cours=require("../models/cours")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");
const { registerRules,loginRules, validator } = require("../middlewares/validator");
const router = express.Router();
//register user:
router.post("/registeruser", registerRules(), validator, async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).send({ msg: "user already exist, please login" });
    }
    const newUser = new User({ ...req.body });
    const hashedPassword = await bcrypt.hash(password, 10);
    newUser.password = hashedPassword;
    await newUser.save();
    res.send({ msg: "user successfully registred", newUser });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});
//register children
router.post("/registerChild", registerRules(), validator,isAuth(), async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).send({ msg: "user already exist, please login" });
    }
    const newUser = new User({ ...req.body,role:"eleve" });
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword);
    newUser.password = hashedPassword;
    //erroooooooooooooooooooooooooooooooor: newUser={...newUser,password:password}
    const parent= await User.updateOne({_id:req.user._id},{$set:{children:newUser._id}})
    await newUser.save();
    res.send({ msg: "user successfully registred", newUser });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});
//login
router.post("/login",loginRules(),validator, async (req, res) => {
  const { email, password } = req.body;

  try {
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const isMatched = await bcrypt.compare(password, existedUser.password);
    if (!isMatched) {
      return res.status(400).send({ msg: "bad credential" });
    }
    const payload = { idUser: existedUser._id };
    const token = await jwt.sign(payload, process.env.secretOrPublicKey);
    res.send({ user: existedUser, token });
  } catch (error) {
    console.log(error);
  }
});

// get current user
router.get("/currentUser", isAuth(), (req, res) => {
  console.log(req.user);
  res.send(req.user);
});
router.get("/allUsers", async (req, res) => {
  /*console.log(req.user);
  res.send(req.user);*/
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
// all pupils
router.get("/eleve",isAuth(),async(req,res)=>{
  try {
    const eleves = await User.find({role:"eleve"});
    res.send(eleves);
  } catch (error) {
    res.status(400).send(error.message);

  }
})
//all parents
router.get("/parents",isAuth(),async(req,res)=>{
  try {
    const parents = await User.find({role:"parent"});
    res.send(parents);
  } catch (error) {
    res.status(400).send(error.message);

  }
})
//all teachers
router.get("/teachers",isAuth(),async(req,res)=>{
  try {
    const teachers = await User.find({role:"enseignant"});
    res.send(teachers);
  } catch (error) {
    res.status(400).send(error.message);

  }
})
// delete parent
router.delete("/parent/:id",isAuth(),isAdmin,async(req,res)=>{
  try {
    const parentDeleted=await User.deleteOne({_id:req.params.id})  
    if(parentDeleted.deletedCount){return res.send({msg:"parent deleted "})}
    res.status(400).send({msg:"already deleted"})
  } catch (error) {
      console.log(error)
      res.status(400).send("failed to delete") 
  }
})
// delete teacher
router.delete("/enseignant/:id",isAuth(),isAdmin,async(req,res)=>{
  try {
    const enseignantDeleted=await User.deleteOne({_id:req.params.id})
    const coursDeleted=await Cours.deleteMany({enseignant:req.params.id})  
    const notesDeleted=await Note.deleteMany({enseignant:req.params.id})  
    if(enseignantDeleted.deletedCount){return res.send({msg:"teacher deleted "})}
    res.status(400).send({msg:"already deleted"})
  } catch (error) {
      console.log(error)
      res.status(400).send("failed to delete") 
  }
})
// delete pupil
router.delete("/eleve/:id",isAuth(),isAdmin,async(req,res)=>{
  try {
    const pupilDeleted=await User.deleteOne({_id:req.params.id}) 
    const notesDeleted=await Note.deleteMany({children:req.params.id})  
    if(pupilDeleted.deletedCount){ res.send({msg:"pupil deleted "})
  } else
  {
    res.status(400).send({msg:"already deleted"})}
  } catch (error) {
      console.log(error)
      res.status(400).send("failed to delete") 
  }
})
//edit user
router.put("/:id",isAuth(),async(req,res)=>{
  try {
   const result=await User.updateOne({_id:req.params.id},{$set:{...req.body}})
   const userUpdated=await User.findOne({_id:req.params.id})

     if(result.modifiedCount){return res.send({msg:"user updated ",userUpdated})}
      res.status(400).send({msg:"already updated"})
  } catch (error) {
    console.log(error)
    res.status(400).send("failed to update")
  }
})
// details user
router.get("/details/:id",isAuth(),async(req,res)=>{
  try {
     const oneUser=await User.findOne({_id:req.params.id}) 
     res.send({oneUser})  
    } catch (error) {
        console.log(error)
        res.status(400).send("failed to get the user")
    }
 
}
)

module.exports = router;
