import express from 'express'
import { Detail } from './detailModel.js'

const detailRouter=express.Router()

detailRouter.post('/add/',async(request,response)=>{
    const new_detail=new Detail(request.body)
    await new_detail.save()
    response.json("Data Saved")
})

detailRouter.get('/all/',async(request,response)=>{
    const data=await Detail.find({})
    response.json(data)
})






export default detailRouter