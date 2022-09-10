const mongoose=require('mongoose')
const noteSchema=new mongoose.Schema({
    nameMatiere:{type:String,required:[true, "name of subject is required"],uppercase:true},
	  note: Number,
    enseignant:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    parent:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    children:{ type: mongoose.Schema.Types.ObjectId, ref: 'user' },

}
)
module.exports=Note = mongoose.model('note',noteSchema);
