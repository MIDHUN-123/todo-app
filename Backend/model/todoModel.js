const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    text:{
        type:String,
        required:[true,'Please add a task'],
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    }
},
    {
        timestamps:true
    }
);

module.exports=mongoose.model('todo',todoSchema);