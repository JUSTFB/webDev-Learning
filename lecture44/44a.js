// // // // // // // // arrays are reference type ==> reference types are stored in heap memory
// // // // // // // // ex arrays objects functions
// // // // // // // // data stores in heap and reference stored in stack memory
// // // // // // // // object is collection of key value pairs

// // // // // // // let obj ={
// // // // // // //     name :"fenil",
// // // // // // //     age:21,
// // // // // // //     weight:58,
// // // // // // //     greet:function(){
// // // // // // //         console.log("hello fenil");
// // // // // // //     }

// // // // // // // };
// // // // // // // console.log("object is ",obj);
// // // // // // // obj.greet();

// // // // // // // // shallow copy and deep copy?? homework
 

// // // // // // // // let arr=[1,45,6,32,5,3];
// // // // // // // // can be like this also
// // // // // // // let arr2=[1,2,3,true,"fenil",4,5,6,];
// // // // // // // console.log("array is ",arr2);


// // // // // // // // arr constructor
// // // // // // // // let arr3= new Array("fenil",5,false);
// // // // // // // // console.log("array 3 is ",arr3);

// // // // // // // // console.log(typeof(arr3)); // object

// // // // // // // // console.log(arr2[2]); // access element

// // // // // // // // array has epush pop slice shift map filter reduce forEach sort indexof find etc methods

// // // // // // // // arr3.push("patel");
// // // // // // // // console.log("after push ",arr3);

// // // // // // // // arr3.pop();
// // // // // // // // console.log("after pop ",arr3);
// // // // // // // // // pop last element remove kare che
// // // // // // // // arr3.shift();
// // // // // // // // console.log("after shift ",arr3);
// // // // // // // // // shift first element remove kare che,and unshift first ma add kare che

// // // // // // // // arr3.unshift("newvalue");
// // // // // // // // console.log("after unshift ",arr3);
// // // // // // // // slice 
// // // // // // // //  arr4=arr2.slice(0,3); // 4 excluded
// // // // // // // // console.log("after slice ",arr4);

// // // // // // // // splice

// // // // // // // // we can rplace elements using splice for example we can remove 2 elements from index 1 and add 3 new elements
// // // // // // // arr2.splice(1,2,"fenil");
// // // // // // // console.log(arr2);
// // // // // // // // it means i remove fro index on 0 items and add "fenil" at index 1

// // // // // // // // using o MAP


// // // // // // let arr=[10,20,30];

// // // // // //  let ansArr=arr.map(
// // // // // //     number=>{return number*number;}
// // // // // // )
// // // // // // console.log(ansArr);

// // // // // // let incArr=arr.map(
// // // // // //     (num,index)=>{
// // // // // //         console.log(index);
// // // // // //         return num+1;
// // // // // //     }
// // // // // // );
// // // // // // // console.log(index);
// // // // // // console.log(incArr);

// // // // // // // filter
// // // // // //  let newAnsarr=arr.filter(
// // // // // //     (number)=>{
// // // // // //         return number>15;
// // // // // //     }
// // // // // // )
// // // // // // console.log(newAnsarr);

// // // // // let arr=[1,2,"fenil",45,5,null,"patel"];

// // // // // let filteredArr=arr.filter(
// // // // //     (element)=>{
// // // // //         if(typeof(element)=="string"){
// // // // //             return element;
// // // // //         }
// // // // //     }
    
// // // // // )
// // // // // console.log(filteredArr);

// // // // // // reduce(we dont use usually but have to learn)
// // // // // // what is  accumulator?
// // // // // // what is current value?
// // // // // // 

// // // // let arr=[10,20,30,40];
// // // //  let ans=arr.reduce((acc,crr)=>{
// // // //     return acc+crr;
// // // // },0);

// // // // console.log("reduced value is "+ans);
// // // // // how it works?
// // // // // acc=0 crr=10 => return 10
// // // // // acc=10 crr=20 => return 30
// // // // // acc=30 crr=30 => return 60
// // // // acc=60 crr=40 => return 100

// // // let arr=[3,34,6,78,54,35,65];
// // // arr.sort();
// // // console.log("sorted array is "+arr);

// // // // how to sort in descending order

// // // // indexof and find
// // // // for each

// // let arr=[10,20,30,40,50];

// // let length=arr.length;
// // console.log("length is "+length);
// // arr.forEach((value,index)=>{
// //     console.log("number",value,"at index",index)
// // })

// // // forin
// // let obj={
// //     name:"fenil",
// //     age:21,
// //     city:"ahmedabad"
// // }
// // for( let key in obj){
// //     console.log(key, " ",obj[key]);
// // }

// // //for of
// // for(let value of arr){
// //     console.log("value is "+value);
// // }

// // let name ="fenil";
// // for(let char of name){
// //     console.log(char);
// // }
// // // functions in js

// let arr=[10,20,30,40,50];

// // function getsum(arr){
// //     sum=0;
// //     let len = arr.length;
// //     for(let i=0;i<=len;i++){
// //         sum=sum+arr[i];
// //         console.log(sum);
// //     }
// // }

// // console.log(getsum(arr));

// // let sum=0;

// // arr.forEach((value)=>{
// //     sum=sum+value;
// //     return sum;
// // })
// // console.log("sum is "+sum);

// let array=[10,20,30,40];

// let ansArr=array.map((n,i,t,m)=>{
//   console.log(i);
//   console.log(t);
//   console.log(m);3
// upper code will give 3 output for element ,index and whole array but m is undefined cuz array hase only 3 parameters


