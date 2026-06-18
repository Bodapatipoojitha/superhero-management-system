const User=require('../models/Auth');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
exports.register=async(req,res)=>{
 const {username,email,password}=req.body;
 if(!username||!email||!password) return res.status(400).json({message:'All fields required'});
 if(await User.findOne({email})) return res.status(400).json({message:'User already exists'});
 const hash=await bcrypt.hash(password,10);
 const user=await User.create({username,email,password:hash});
 res.status(201).json({message:'Registered',user});
};
exports.login=async(req,res)=>{
 const {email,password}=req.body;
 const user=await User.findOne({email});
 if(!user) return res.status(404).json({message:'User not found'});
 const ok=await bcrypt.compare(password,user.password);
 if(!ok) return res.status(400).json({message:'Invalid password'});
 const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'7d'});
 res.json({token});
};