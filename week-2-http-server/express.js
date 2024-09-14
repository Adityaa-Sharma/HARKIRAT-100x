const express=require("express");
const app=express();

app.use(express.json());
var users=[{
    name:"aditya",
    kidneys:[{
        healthy:true,
    },
    {
        healthy:false,
    }]
}]

// get request to check how many kidneys are there and there health.
app.get('/',function(req,res){
    const kidneys=users[0].kidneys;
    let numerOfKidneys=kidneys.length;
    let healthy=0;
    let unhealthy=0;
    for(let i=0;i<kidneys.length;i++){
        if(kidneys[i].healthy){
            healthy++;
        }else{
            unhealthy++;
        }
    }
    res.send({
        "NumberOfKidneys":numerOfKidneys,
        "NumberOfHealthyKidneys":healthy,
        "NumberOfUnhealthyKidneys":unhealthy
    });

})


//user can add a healthy kidney

app.post('/',function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    });
    res.json({
        message:"Kidney added successfully"
    });
});


// user can replace a kidney and make it healthy
app.put('/',function(req,res){
    let kidneys=users[0].kidneys;
    let NumberOfKidneys=kidneys.length;
    for(let i=0;i<NumberOfKidneys;i++){
        if(kidneys[i].healthy==false){
            kidneys[i].healthy=true;
            res.send({
                "message":"Kidney replaced successfully"
            });
            return;
        }
    }
    res.send({
        "message":"No unhealthy kidney found"
    });
});

// delete all the unhealthy kidneys

app.delete('/',function(req,res){
    let kidneys=users[0].kidneys;
    let NumberOfKidneys=kidneys.length;
    for(let i=0;i<NumberOfKidneys;i++){
        if(!kidneys[i].healthy){
            kidneys[i].healthy=true;
        }
    }
    res.send({
        "message":"All unhealthy kidneys removed"
    });

});

app.listen(3000);