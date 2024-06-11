#! /usr/bin/env node


import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message : " enter your first number : " , type : "number", name  : "firstnumber"},
    {message : " enter your second number :" , type : "number", name : "secondnumber"},
    {message : "select one of the operators",
        type: "list",
         name : "operators",
        choices : ["addition","subtraction","division","multiplication"],}
]);

if(answer.operators === "addition") {
    console.log(answer.firstnumber + answer.secondnumber)
}else
if(answer.operators === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber)
}else
if(answer.operators === "division") {
    console.log(answer.firstnumber / answer.secondnumber)
}
if(answer.operators === "multiplication") {
    console.log(answer.firstnumber * answer.secondnumber)
}