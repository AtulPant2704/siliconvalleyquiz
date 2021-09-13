var readLineSync = require("readline-sync");
const chalk = require("chalk");

var username = readLineSync.question("What's your name? ");

console.log(chalk.bold(chalk.underline(("Welcome "+ username +" to Atul's Quiz on Silicon Valley"))));

var currentScore =0;

var highestScore = {
  name: "Atul",
  score: 3
}

function check(question,answer,index){
  var userAnswer = readLineSync.question();
  if(userAnswer === answer){
    console.log(chalk.greenBright("You answered " + userAnswer));
    console.log(chalk.greenBright("Right answer"));
    currentScore++;
    start();
  }else{
    console.log(chalk.redBright("You answered " + userAnswer));
    console.log(chalk.redBright("Wrong answer \nTry again"));
    check(question,answer,index);
  }
}

var questions = [{
  question:"What was the name of the compression software built?",
  a:"Hooli",
  b:"Pied Piper",
  c:"WinZip",
  answer:"b"
},{
  question:"Erlich Bachman Earlier startup was called?",
  a:"Aviato",
  b:"Avalara",
  c:"Apsara",
  answer:"a"
},{
  question:"Gilfoyle was an immigrant from which country?",
  a:"Germany",
  b:"Canada",
  c:"Poland",
  answer:"b"
},{
  question:"Dinesh was master in which language?",
  a:"Javascript",
  b:"Python",
  c:"Java",
  answer:"c"
},{
  question:"Richard Hendricks became professor at which college?",
  a:"Stanford",
  b:"Harvard",
  c:"Massachusetts",
  answer:"a"
}];



function print(index){
   console.log(chalk.blue(questions[index].question));
   console.log(chalk.red("a: " + questions[index].a));
   console.log(chalk.red("b: " + questions[index].b));
   console.log(chalk.red("c: " + questions[index].c));
   check(questions[index].question,questions[index].answer,index);
}

var questionNumber = 0;

function start(){
  var startingQues = readLineSync.question("\nWhat do you want to do? \nPress e to exit, any other key to continue ");

  if(questionNumber<questions.length){
    if(startingQues!='e'){
      console.log("You selected " + startingQues);
      console.log("\n");
      print(questionNumber++);
    }else{
      console.log("You selected e \n Thanks for playing...");
    }
  }else{
    console.log("Thanks for playing...")
  }
}

start();

if(currentScore>highestScore.score){
  highestScore.name=username;
  console.log("YAY! you have made a new high score");
  console.log("Name: "+ username+ "\nNew High Score: "+ currentScore);
}

