import mongoose from "mongoose";

const detailModel=mongoose.Schema({
   jobid:{
    type:String
   },

    overview:{
        type:String,
        required:true
    
    },

    keyresponse:{
        type:String,
        required:true
    },
    rskill:
    {
        type:String,
        required:true
    },
    sskill:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    emptype:{
        type:String,
        required:true
    },
    rolecat:{
        type:String,
        required:true
    },
    ug:{
        type:String,
        required:true
    },
    pg:{
        type:String,
        required:true
    }

    
})
export const Detail= mongoose.model('detail',detailModel)