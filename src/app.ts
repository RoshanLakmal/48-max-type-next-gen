// Code goes here!
const userName = 'Max';
// userName = "Roshan";
let age = 30;

function add(a:number,b:number){
    let result;
    result = a+b;
    return result;
}

// if(age>20){
//     var isOld = true;
// }

// console.log(isOld); // works in the browser

// if(age>20){
//     let isOld = true; // Give eroor in typescript
// }

// console.log(isOld); // Will not work in the browser

/* Arrow functions */
const add2 = (a:number, b:number) => {
    return a+b;
};
console.log(add2(2,5));

/* One expression short form */
const add3 = (a:number, b:number) => a+b;
console.log(add3(2,2));

const printOutput = (output: string | number) => {
    console.log(output)
}
printOutput(add3(6,2));

/* Short form single argument */
const printOutput2:(a:number | string)=> void = output=> console.log(output);
printOutput2(add3(3,2));

const button = document.querySelector('button');
if(button){
    button.addEventListener('click', event=>console.log(event));
}

/* Default assignment need to be last */
const add4 = (a:number, b:number =1) => a+b;
console.log(add4(2));

/* Default assignment need to be last because the last parameter will be empty*/
// const add5 = (a:number=1, b:number) => a+b;
// console.log(add5(2));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

// activeHobbies.push(hobbies); //Not going to work because it accepts strings not string[]

// Both way works
const activeHobbies1 = ['Hiking',...hobbies];
activeHobbies1.push(...hobbies);
console.log(activeHobbies1);

const person = {
    name: 'Max',
    age: 30
}

const refPerson = person; // Not copying just reference to the same object
const copiedPerson = {...person}; // copying
console.log(copiedPerson);

const add5 = (...numbers: number[]) => {
    return numbers.reduce((curResult,curValue) => {
        return curResult + curValue;
    },0);
};

const addNumbers = add5(1,5,3,1);
console.log(addNumbers);

const add6 = (...numbers: [number,number,number]) => {
    return numbers.reduce((curResult,curValue) => {
        return curResult + curValue;
    },0);
};

const addNumbers2 = add6(1,5,4);
console.log(addNumbers2);

const newhobbies = ['Sports', 'Cooking'];
// const hobby1 = newhobbies[0];
// const hobby2 = newhobbies[1];

const [hobby1,hobby2, ...remainingHobbies] = newhobbies;
console.log(hobbies,hobby1,hobby2);