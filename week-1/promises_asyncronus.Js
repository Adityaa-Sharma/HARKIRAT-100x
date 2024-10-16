// const fs=require("fs");

// import { set } from "express/lib/application";

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

// function fn(resolve){
//     let a=0;
//     for(let i=1;i<10;i++){
//         a=a+1;
//     }
//     resolve(a);
// }

// const p=new Promise(fn);

// p.then(function(args){
//     console.log("the value is :"+args);
// });







// practice 
// callbacks

// function add(callback,a,b){
//     setTimeout(function(){
//         callback(a+b);
//     },5000);
// }

// function callback(result){
//     console.log("The result is :"+result);
// }

// add(callback,5,5);



// promises

// function add(a, b) {
//     return new Promise(function(resolve, reject) {
//         // console.log(resolve);
//         setTimeout(function() {
//             resolve(a + b);
//         }, 5000);
//     });
// }

// add(5, 5).then(function(result) {
//     console.log("The result is :" + result);
// });


// example:2(using endpoints)
// endpoint: http://localhost:3000/add
import fetch from 'node-fetch';

function add(a, b) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            fetch("http://localhost:3000/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    a: a,
                    b: b
                })
            })
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(error => reject(error));
        }, 3000);
    });
}

add(5,5).then(function(result){
    console.log("The result is :"+result.sum);
})
