// map
// function transform(a){
//     return 2*a;
// }

// const input = [1,2,3,4,5];
// const output = input.map(transform);
// console.log(output);

// filter
let input = [1,2,3,4,5,6,7,8,9,10];
let output = input.filter(function(a){
    return a%2==0;
});
// console.log(output);
let input1=["aditya","sachin","saurav","rahul"];
let output1=input1.filter(function(a){
    if(a.startsWith("s")){
        return a;
    }       
});
console.log(output1);