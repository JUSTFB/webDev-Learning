// // // for(let a=10;a<=100;a++){
// // //     console.log(a);
// // // }

// // for(let i=0;i<=10;i++){
// //     if(i==3)
// //         break;
// //     else
// //         console.log(i);
// // }


// // for(let i=0;i<=10;i++){
// //     if(i==3)
// //         continue;
// //     else
// //         console.log(i);
// // // }

// // let i=0;
// // while(i<=5){
// //     console.log(i);if
// //     i++;
// // }

// let i=0;
// while(i<5){
//    console.log("before the condition");
//     if(i==3){
//         i++;
//         continue;
//         // i++; avu nhi karnavu nhi to infinite loop ma jai jase
//     }
//     else
//          console.log("inside the loop");
    
//     i++;
// }

let name ="hello";
let name1= `fenil 
patel`;
console.log(name1);
let name2 = new String ("fenil patel");
// find what is difference between string literal and string object
let op1='english ';
let op2='maths';
// let total = op1 + op2;
// let total2= `${op1} ${op2}`; //inside backtick we can use variable directly using ${}
// console.log(total2);
// console.log(total);

// console.log(op2.length);
// console.log(op2.toUpperCase());
// console.log(op2.toLowerCase()); 
console.log(op2.substring(2));
console.log(op2.substring(1,4));
console.log(op2.slice(1,4));
console.log(op2.slice(-4,-1));
// diff  btw substring and slice is substring does not accept negative index but slice accept negative index
// let sentence ="hello ji kese ho";
// let word = sentence.split(" ");

let sentence ="helloji \"kese\" ho";
console.log(sentence);
let word = sentence.split(" ");


console.log(word);