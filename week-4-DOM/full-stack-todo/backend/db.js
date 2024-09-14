const mongoose=require('mongoose');


connectionString='mongodb+srv://Aditya-sharma:2RtYOvomnDWCIH6S@cluster0.7se7y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(connectionString);
    
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
})

const todo=mongoose.model('todo',todoSchema);

module.exports={todo}