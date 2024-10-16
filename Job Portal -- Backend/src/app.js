import { config } from 'dotenv'
import express, { json, urlencoded } from 'express'
import { set,connect } from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import sharp from 'sharp'
import { PDFDocument } from 'pdf-lib'

import userRouter from './user/UserRouter.js'
import JobPostRouter from './Employer/JobPostRouter.js'
import detailRouter from './Details/detailRouter.js'
import sendMail from './sendMail.js'
import uploadRouter from './FileUpload/uploadRouter.js'



const app=express()

app.use(json())
app.use(cors())
app.use(urlencoded({extended:true}))
config()
set('strictQuery',false)


app.use('/user/',userRouter)
app.use('/job/',JobPostRouter)
app.use('/detail/',detailRouter)
app.use('/sendmail/',sendMail)
app.use('/upload/', uploadRouter)


const port = process.env.PORT
const mongo_db = process.env.MONGO_DB


const start=async()=>{
    await connect(`${mongo_db}`)
    app.listen(port,console.log(`listening on the port ${port}`))
}


start()

