#!/usr/bin/env node

// CLI Project: Do you know me ? CLI Quiz App

// console.log("Hello");

// Importing the readline module
import readline from "readline";
import chalk from "chalk";
const log = console.log;

// Creating the readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Creating the questions array
const questions = [
  "What is my name? ",
  "Where do I live? ",
  "What is my favourite color? ",
  "What is my favourite food? ",
  "What is my favourite programming language? ",
];

// Creating the answers array
const answers = ["Milind", "Dhanbad", "Black", "Pizza", "JavaScript"];

// Creating the score variable
let score = 0;

// Creating the ask function
function ask(i) {
  rl.question(questions[i], (userInput) => {
    if (userInput.toLowerCase() === answers[i].toLowerCase()) {
      log(chalk.green("Right!"));
      score++;
      log(chalk.blue("Your current score is: ", score));
    } else {
      log(chalk.red("Wrong!"));
      log(chalk.blue("Your current score is: ", score));
    }

    if (i < questions.length - 1) {
      ask(i + 1);
    } else {
      log(chalk.yellow("Your final score is: " + score));
      rl.close();
    }
  });
}

// Calling the ask function
ask(0);
