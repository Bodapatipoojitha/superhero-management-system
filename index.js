require('dotenv').config();
const express=require('express');
const cors=require('cors');
const connectDB=require('./config/db');
const app=express();
connectDB();
app.use(express.json());
app.use(cors());
app.use('/uploads',express.static('uploads'));
app.use('/auth',require('./router/authRouter'));
app.use('/api/v1/superhero',require('./router/superheroRouter'));
app.listen(process.env.PORT,()=>{
 console.log(`Server running on port ${process.env.PORT}`);
});