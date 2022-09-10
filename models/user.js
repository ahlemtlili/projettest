const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "firstName is required"] },
  lastName: { type: String, required: [true, "lastName is required"] },

  CIN: Number,
  classe:String,
  numTel:Number,
  email:{
    type: String,
    required: [true, "email is required"],
    lowercase: true,
  },
  password: String,
  role: {
    type: String,
    enum: ["enseignant", "admin", "eleve","parent"],
    default: "parent",
  },
  children:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },

});
module.exports = User = mongoose.model("user", userSchema);
