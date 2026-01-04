// // call stack and hoisting 
// sayMyName("fenil");

// function sayMyName(name){
//     console.log(name)
// }



//  function hoisting is out current function will go up in its current scope 
// // // serach defination if wrong it will go to the outer scope  and so on

// // // for example if i call muy function before its defination it will work because of hoisting


// // // variable hoisting
// // console.log(age);
// // var age =25;
//  // it will give undefined because of hoisting
// //  just declaration will go up like just var age will go up there so it will give undefined not the 25 value go also

// // but if we use let or const it will give reference error because they dont support hoisting

// // console.log(age2);
// // let age2 =24;

// // we will use let and const to avoid such issues

// // if we use function expression then it will give error because function expression is stored in a variable






// // sayMyAge(25);

// // var sayMyAge = function(age){
// //     console.log(age);
// // }
// // this is called expression and it will give error because function expression is stored in a variable and variable hoisting only hoist the declaration not the value so it will give error

// // class human {
    
// // }

// // const obj1=new human();
// // class hoisting is same as function hoisting it will go up in its current scope and search for its defination if not found it will go to outer scope and so on

// // functioncall stack?
// // function is first class citizen in javascript
// // why?
// // we can assin variable,as argument,we can return function,we can make array of functon, as property also


// function greetMe(greet, name){
//     console.log("hello", name);
//     greet();
// }
// greetMe(greet, "fenil");
// function greet(){
//     console.log("hello world");
// }

// // function will return function 


// // function solve(number){
// //     return function(number){
// //         return number*number;
// //     } 
// // }
// // let square =solve(5);
// // let result =square(5);
// // console.log(result);

// const arr=[
//         function sum(a,b){
//             return a+b;
//         },
//             function sub(a,b){
//             return a-b;
//         },
//             function div(a,b){
//             return a/b;
//         }

// ]

// let first=arr[0](3,7);
// console.log(first);

// let obj ={
//     age:25,
//     name:"fenil",
//     ht:175,
//     wt:58,
//     greet: () => {
//         console.log("hello");
//     }
// }
// obj.greet();

