// let answer=0;
// for (let i =0;i<=100;i++){
//     answer=answer+i;
// }
// console.log(answer);

// print all the even number in the array

// const arr=[1,2,3,4,5,6,7,8,9,10];

// for (let i =0; i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }
// }

// objects in the javascript
// const obj ={firstName:"Aditya",lastName:"Sharma",age:22};
// console.log(obj.firstName);


// function call backs

// function add(a,b,fnTocall){
//     const result= a+b;
//     fnTocall(result);
// }
// function display(value){
//     console.log("sum of these two number is "+value);

// }

// in funcction call bback we can pass function as  arguments in the other function
// add(10,20,display);

// fucntion to greet after after 2 sec

// function greet(){
//     console.log("Hello World");
// }

// setTimeout(greet,2*1000);



// callback example

// function square(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// } 

// function SumOfPower(a,b,fn){
//     let val1=fn(a);
//     let val2=fn(b);
//     return val1+val2;
// }

// console.log(SumOfPower(2,3,cube));    


// testing asynchronus function
fs=require("fs");

console.log("start");

fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
});

function greet(){
    console.log("Hello World");
}

setTimeout(greet,3*1000);

console.log("end");

// output, How this code should work

//start
//end
// data of a.txt
// Hello World
