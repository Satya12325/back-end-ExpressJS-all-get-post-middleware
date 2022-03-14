// Node js is a frasme work
//  

// this is for terminal question 


// let readline = require('readline')
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// r1.question(`what is your name ?`,(name) =>{
//     r1.question(`What is your age ?`,(age) =>{
//         r1.question(`What is your gender ?`,(gender) =>{
//             console.log(`Hi My name is ${name} and My age is ${age} and also my gender is ${gender}`);
//             r1.close();
//         })
//     })
// } )


// ther is also a library is called inquirer whichis
// npm i inquirer

const inquirer = require('inquirer');

var question = [
    {
        type:"input",
        name:"name",
        message:"What  is your name ?",
    },
    {
        type:"input",
        name:"age",
        message:"What  is your age ?",
    }
]


inquirer.prompt(question).then(ans => {
    console.log(`Hi ${ans.name} ! age ${ans.age}`) 
    //  insted of this we have also use see below
    console.log(`Hi ${ans["name"]} ! age ${ans["age"]}`) 
})