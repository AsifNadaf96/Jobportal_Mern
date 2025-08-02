import express from "express";
import {deleteadminjob, getalljobs, getjobbyid,importJobs, postjob, updateadminjob} from '../controller/jobscontroller.js'
const router=express.Router();

//routes
router.post('/jobs/:adminid',postjob);
router.get('/jobs',getalljobs);
router.get('/jobs/:id',getjobbyid)
router.put('/jobs/:id/:adminid',updateadminjob);
router.delete('/jobs/:id/:adminid',deleteadminjob)
router.post('/importjobs',importJobs)

export default router