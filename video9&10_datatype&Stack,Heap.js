//Primitive
// 7 type data type: String, Number, Boolean, null, BigInt, Symbol, undefined

const score = 100;
const scoreValue = 100;

const isLoggedIn = false
const outsideTemp = null
// console.table([isLoggedIn,outsideTemp]);
let userEmail;// undefined

const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(id === anotherid);

const bigNumber = 305430494533n; //n will convert to bigInt



// Reference (Non primitive)
// Array, Objects,  Functions, 
const heros = ['shaktiman','naagraj','Doga']; // these value will be the above
let myObj = {
    name:'subha',
    age:22,
}

// in js variable can be treated like function
const myFunction = function(){
console.log('we are learning');
}
// console.log(typeof outsideTemp);


// console.log(typeof myFunction);// function
// console.log(typeof null, anotherid);//object, symbol

// ecma-international.org



// ************************************
// video10 Stack and Heap memory in js 

// *******Stack(Primitive),  Heap(Non-Primitive)*********
//stack: whatever we declear a variable  is a copy
//heap: object or sth defined hole will go in heap. original value will change and whatever we change org will also change

let myName = 'sudiprathod';
let anotherName = myName;
anotherName = 'chaiaurcode';
console.log(myName,anotherName);

// stack copy dai and heap direct reference dai 
let userOne  = {
    email: 'user@google.com',
    upi: 'user@ylb',
}
let userTwo = userOne;
userTwo.email = 'hitesh@google.com',
console.log(userOne.email);
console.log(userTwo.email);
