const mongoose=require('mongoose');
module.exports=mongoose.model('Superhero',new mongoose.Schema({
 heroId:String,
 heroName:{type:String,required:true},
 publisher:String,
 notes:String,
 image:String,
 createdBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
},{timestamps:true}));