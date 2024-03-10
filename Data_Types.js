"use strict";
//example of string
let personName = "mahida athar";
console.log(personName);
//example of numbers 
let age = 20;
console.log(20);
//example of boolean 
let smoke = true;
console.log(smoke);
//example of null
let jar = null;
console.log(jar);
//example of undefined 
let question;
console.log(question);
//example of symbol
let sym_1 = Symbol("mahida");
//unique value
let sym_2 = Symbol(20);
let sym_3 = Symbol(20);
console.log(sym_2 === sym_2);
// another example of symbol
let month = Symbol('12');
let user = {
    name: "mahida",
    class: "IT",
    [age]: 20
};
console.log(user);
//example of bigint
let new_Number = 1234567907896789456789n;
console.log(new_Number);
let another_example = BigInt("324142647596978574634534252378384");
console.log(another_example);
let add = new_Number + another_example;
console.log(add);
