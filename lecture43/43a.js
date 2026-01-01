

// function sayMyName(){
//     console.log("My name is fenil");
// }

// sayMyName();

// function printCounting(){
//     for(let i=0;i<10;i++){
//         console.log("printinh number "+i);
//     }
// }
// printCounting();

// function fb(n){
//     console.log("your name is "+n);

// }
// fb("fenil");

// function getAvg(num1,num2){
//   let avg =(num1+num2)/2;
//     console.log("average is "+avg);
// }
// getAvg(4,6);

// function  getSum(a,b,c){
//     let sum =a+b+c;
//     return sum;
// }
//  let ans =getSum(2,3,4);

//     console.log("sum is "+ans);

function getmyname(firstname,lastname){
    return `${firstname} ${lastname}`;

    //UNREACHABLE CODE
    console.log("hello");
    //AFTER RETURN STATEMENT NO CODE WILL BE EXECUTED
// IF WE PUT ANY NUMBER IN ARGUMENT IT WILL CONVERT INTO STRING
}

let fullname =getmyname(5,"patel");
console.log(fullname);

// WE CAN EQUATE FUNCTION IN VARIABLE
let multiply = function (a,b){
    return a*b;
} 
let ans =multiply(78,9);
console.log("multiplication is "+ans);

//arrow function

//normal

let squareNum =function(x,y){
    return x**y;
}
console.log("square is :"+squareNum(7,8));

//arrow
let getExp=(a,b) =>{
    return a**b;
}
console.log("Exp is:"+getExp(3,4));