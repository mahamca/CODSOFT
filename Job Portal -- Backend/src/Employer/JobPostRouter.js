import express from 'express'
import { Job } from './JobPostModel.js'

const JobPostRouter=express.Router()

JobPostRouter.post('/add/',async(request,response)=>{
    const new_job=new Job(request.body)
    await new_job.save()
    response.json("Data Saved")
})

JobPostRouter.get('/all/',async(request,response)=>{
    const data=await Job.find({})
    response.json(data)
})






export default JobPostRouter