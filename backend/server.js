import express from "express";
import connectdb from "./db/dbconnect.js";
import userrouter from './router/userroutes.js';
import jobrouter from './router/jobsroutes.js';
import cors from 'cors';
import jobsapplicationrouter from './router/jobapplicationroutes.js';
import dotenv from "dotenv";
dotenv.config();

console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS ? 'Loaded ✅' : 'Not Loaded ❌');


const app = express();
dotenv.config();//load env variables
connectdb(); 

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/',(req,res)=>{
    res.status(200).send("server is running fine");
})
app.get('/api/home',(req,res)=>{
    res.status(200).send("Home page route checking");
})
//ROUTES
app.use('/api',userrouter)
app.use('/api',jobrouter)
app.use('/api',jobsapplicationrouter)
let port=process.env.port || 5051;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});