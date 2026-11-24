require('dotenv').config();
const express=require('express');
const cors=require('cors');
const connectDB=require('./config/db');
const app=express();
const homeRoute=require('./Routes/homeRoute');
const todoRoute=require('./Routes/todoRoute');

//Middleware
app.use(cors({
    origin:'http://localhost:5173'
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Database connection

connectDB();

//Routes

app.use('/',homeRoute);
app.use('/api/todos',todoRoute);

//Server
const port=process.env.PORT || 5000;

app.listen(port,()=>{
    console.log("Localhost:",port);
    
})