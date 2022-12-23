// Working with the Readline Module

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, // process is a global object (built in object in node.js)
    output: process.stdout
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;



rl.question(`What is ${num1} + ${num2}? \n`,
    // get user input as a parameter
    (userInput) => {
        if (userInput.trim() == answer) {
            console.log("Your answer is correct\n");
            rl.close();
        }
        else {
            rl.setPrompt(`Your answer of is incorrect try again!!! \n`);
            rl.prompt();
            rl.on('line', (input) => {
                if (input.trim() == answer) {
                    console.log("Your answer is correct\n");
                    rl.close();
                } else {
                    rl.setPrompt(`Your answer of ${input} is incorrect try again!!! \n`);
                    rl.prompt();
                }
            });
        }
    });

rl.on('close', () => {
    console.log("Thank you!!! \n");
});
