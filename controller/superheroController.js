const Superhero=require('../models/Superhero');
const axios=require('axios');

exports.searchHero=async(req,res)=>{
 const r=await axios.get(`https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/search/${req.params.name}`);
 res.json(r.data);
};

exports.createHero=async(req,res)=>{
 const hero=await Superhero.create({
  heroId:req.body.heroId,
  heroName:req.body.heroName,
  publisher:req.body.publisher,
  notes:req.body.notes,
  image:req.file?req.file.filename:'',
  createdBy:req.user.id
 });
 res.status(201).json(hero);
};

exports.getHeroes=async(req,res)=>{
 res.json(await Superhero.find({createdBy:req.user.id}));
};

exports.getHero=async(req,res)=>{
 const hero=await Superhero.findOne({_id:req.params.id,createdBy:req.user.id});
 if(!hero) return res.status(404).json({message:'Not found'});
 res.json(hero);
};

exports.updateHero=async(req,res)=>{
 const hero=await Superhero.findOneAndUpdate(
  {_id:req.params.id,createdBy:req.user.id},
  req.body,{new:true}
 );
 if(!hero) return res.status(404).json({message:'Not found'});
 res.json(hero);
};

exports.deleteHero=async(req,res)=>{
 const hero=await Superhero.findOneAndDelete({_id:req.params.id,createdBy:req.user.id});
 if(!hero) return res.status(404).json({message:'Not found'});
 res.json({message:'Deleted'});
};