var userPick;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unAnswer = 0;
var question = 0;
var count = 30;

var marvelQuestion = [{
    question: "Who is the creater of Marvel comics?",
    choices: ["Iron Man", "Stan Lee", "Jon favreu", "Chris Evans"],
    validAnswer: 1
}, {
    question: "Who is the leader of Agent of Shields?",
    choices: ["Nick Fury", "Samuel L.Jackson", "Joe Russo", "Mark Ruffolo"],
    validAnswer: 0
}, {
    question: "Who plays the character of Hawkeye?",
    choices: ["Don Cheadle", "Scarlet Johanson", "Jeremy Renner", "Josh Brolin"],
     validAnswer: 2
},  {
    question: "Which Marvel movie has the boxoffice record?",
    choices: ["avengers:Infinity War", "Capitan America: Civil War", "Iron Man", "Thor"],
    validAnswer: 0
},  {
    question: "how long did it take to shoot the Infinity War?",
    choices: ["1 year", "3 years", "6 months", "10 years"],
    validAnswer: 3
}, {
     question: "Which actor play the Falcon?",
    choices: ["Chris Pratt", "Anthony Macki", "Chadwick Boseman", "Tom Holland"],
    validAnswer: 1
},