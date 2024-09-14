// basic express code haveing expreess.json as middleware

const express=require('express');
const app=express();
app.use(express.json());
const cors=require('cors');
app.use(cors());
const {createTodoSchema,updateTodoSchema}=require('./types');
const {todo}=require('./db');

app.post('/todo',async function(req,res){
    const payload=req.body;
    const parsedPayload=createTodoSchema.safeParse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:'Payload is not valid'
        })
        return;
    }
    // put payload in the mongoDB
    await todo.create({
        title:payload.title,
        description:payload.description,
        completed:false
    })
    res.json({
        msg:'Todo created'
    })

});

app.get('/todo',async function(req,res){
    console.log("in the get request");
    const todos=await todo.find({});
    res.json(todos);
  
});

app.put('/completed',async function(req,res){
    const payload=req.body;
    const parsedPayload=updateTodoSchema.parse(payload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:'You sent the wrong payload'
        })
        return;
    }
    await todo.update({
        _id:req.body.id //This id we have to change
    },
    {
        completed:true // This is the value we have to change
    })
    res.json({
        msg:'Todo marked as completed' // 
    })

});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});