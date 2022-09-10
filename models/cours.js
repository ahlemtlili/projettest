const mongoose=require('mongoose')
const coursSchema=new mongoose.Schema({
    nameCours:{type:String,required:[true, "name of subject is required"],uppercase:true},
    urlcours:String,
    enseignant:{ type: mongoose.Schema.Types.ObjectId,ref:'user' }
}
)
module.exports= Cour = mongoose.model('cour',coursSchema);
