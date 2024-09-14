const express=require('express');
const app=express();
const bodyParser=require('body-parser');

const port=3000;

// middleware
app.use(bodyParser.json());

// app.get('/',function(req,res){
//     res.send("<b>Hello World<b>");
// });
app.post('/conversation',function(req,res){
    console.log(req.body);
    res.send({
        name:"aditya",
        age:"23"
    })
});

app.listen(port,function(){
    console.log(`Server is running on port ${port}`);
});