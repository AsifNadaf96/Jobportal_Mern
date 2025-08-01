import express from 'express'

const jobsapplicationrouter=express.Router();
import {applyjob, deleteapplication, getapplicationsoflogineduser, updateapplication} from '../controller/jobapplicationcontroller.js';


jobsapplicationrouter.post('/apply/:jobid/:userid',applyjob);
jobsapplicationrouter.get('/apply/:userid',getapplicationsoflogineduser);
jobsapplicationrouter.get('/apply/:jobid',getapplicationsoflogineduser);
jobsapplicationrouter.put('/apply/:id',updateapplication);
jobsapplicationrouter.delete('/apply/:id',deleteapplication);



export default jobsapplicationrouter