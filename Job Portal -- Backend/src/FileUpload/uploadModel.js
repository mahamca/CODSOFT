import mongoose from "mongoose";

const uploadModel = new mongoose.Schema({

    image: String,
    name:String,
    phno:Number,
    email:String,
    jobid:String,
    canid:String

}

)
  
export const Upload = mongoose.model('upload', uploadModel);