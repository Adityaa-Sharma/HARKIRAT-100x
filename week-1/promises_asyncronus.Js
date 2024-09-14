// const fs=require("fs");

// function readAndWrite(cb){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         data=data+"The new text has been added."
//         fs.writeFile("a.txt",data,function(){
//             cb();
//         })
//     });
// }

// readAndWrite(function(){
//     console.log("read and write function has been implemented.")
// });


// promises:

//normal code

// function MyOwnSetTimeOut(fn,time){
//     setTimeout(fn,time);
// }

// MyOwnSetTimeOut(function(){
//     console.log("MyOwnSetTimeOut function is called.")
// },2000);

// Code using promises

// function PromisifiedMyOwnSetTimeOut(duration){
//     let p=new Promise(function (resolve){
//         setTimeout(resolve,duration);
//     });
//     return p;
// }

// PromisifiedMyOwnSetTimeOut(2000)
//     .then(function(){
//     console.log("done using promises.");

// });


// next problem statement:

// first call the asyncFunc()
// some sync task
// want my work async return
// some other sync task

// function SomeSyncTask(){
//     console.log("First Sync task is called");
// }

// function SomeSyncTask2(){
//     console.log("second sync taks is called");
// }

// setTimeout(SomeSyncTask,1000);
// SomeSyncTask2();

function fn(resolve){
    let a=0;
    for(let i=1;i<10;i++){
        a=a+1;
    }
    resolve(a);
}

const p=new Promise(fn);

p.then(function(args){
    console.log("the value is :"+args);
});




