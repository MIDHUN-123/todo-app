const Todo=require('../model/todoModel');

//Get Data

const getTodos=async(req,res)=>{
    try{
        const todos=await Todo.find().sort({createdAt:-1});
        res.status(200).json(todos);
    }catch(error){
        res.status(500).json({error:error.message});
        
    }
}

//Save Data

const createTodo=async(req,res)=>{
    try{
        const {text}=req.body;
        if(!text){
            return res.status(400).json({error:'Text Field equired'});
        }
        const newTodo=await Todo.create({text});
        res.status(201).json(newTodo);
    }catch(error){
        res.status(500).json({error:error.message});
    }
};

//update todo

const updateTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const {completed}=req.body;
        const updateTodo=await Todo.findByIdAndUpdate(
            id,
            {
                completed,
                
            },
            {returnDocument:'after' ,runValidators:true}
        );
        if(!updateTodo){
           return res.status(404).json({error:"Todo Not Found"})
        }
        return res.status(200).json({message:"Updated"});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

// Delete todo

const deleteTodo=async(req,res)=>{
    try{
        const {id}=req.params;
        const deleteTodo=await Todo.findByIdAndDelete(id);
        if(!deleteTodo){
           return res.status(404).json({error:"Todo Not Deleted"});
        }
       return res.status(200).json({message:"Sucessfully Deleted"});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

module.exports={
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
}


