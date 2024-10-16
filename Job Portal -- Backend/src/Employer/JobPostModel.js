import mongoose from "mongoose";

const JobPostModel=mongoose.Schema({
   empid:{
    type:String
   },

    title:{
        type:String,
        required:true
    
    },

    desc:{
        type:String,
        required:true
    },
    experience:
    {
        type:String,
        required:true
    },
    skill:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    }
    
})
export const Job= mongoose.model('job',JobPostModel)