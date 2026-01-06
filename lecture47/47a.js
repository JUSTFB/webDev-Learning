// classes and default parameters

// class is blueprint and object is instance of class or can say execution of class  
class human {
    // properties

    // this are public marked properties
    age ;
    name ="fenil";
    ht=175;
    wt=58;
#mrks=90;
    constructor(newAge,newHt,newMarks){
        this.age=newAge;
        this.ht=newHt;
        this.#mrks=newMarks;
    }
// if we use # it will private mark

   
    //behaviour
    walking(){
        console.log("I am walking");
        // we have to  use this to access property OF THAT CLASS
    }

    running (){
        console.log("I am running");
    }

// we will make get and set inside calssnot outside
    // we have to use them to asscecc private properties  oustisde class


    // we can use those function of get and set without using thoe keywords but they provide symantics and we can easily identify them
    get fetchMrks(){

        console.log(this.#mrks);
    }

    set changeMrks(marks){
        this.#mrks=marks;
    }

}
let obj = new human(50,190,70000); // creating object of class human
// console.log(mrks); wont give op
console.log(obj.age);
obj.walking();

// getter and setters

obj.fetchMrks;
// obj.changeMrks=95;
console.log(obj.ht);
console.log(obj.fetchMrks)


// default parameters

// if we forget to pass parameter it will take default value


function sayName(myName="defaultName"){
    console.log("hello", myName);
}
sayName(); // will give undefinedof default value
sayName("fenil");

// second case where first parameter is depentent on second parameter

function calculatemultiply(firstNum=10,secondNum=firstNum*6){
    console.log(firstNum*secondNum);
}
calculatemultiply(3,4);
calculatemultiply(4);

// third case
function solve(value={
age:15,
wt:90
}){
    console.log(value);
}
solve(15); 
solve(); // will take default value

// same as object we can add array also 

// function createArray(arr=[1,2,3,4,5]){
//     console.log(arr);
// }
// createArray([10,20,30]);
// createArray();

solve(null);   //it will take null as value
solve(undefined); // will take default value


// we can add function as default parameter also

function getAge(){
    return 190;
}

function utility(name="fenil",age=getAge()){
    console.log(name ," ", age);
}
utility();