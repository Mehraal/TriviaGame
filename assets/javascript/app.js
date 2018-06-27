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
}, {
    question: "What year was the first Marvel movie released?",
    choices: ["2011", "2000", "2008", "1985"],
    validAnswer: 2
}

];

// window.onload = function () {
//     $("#start").click(timer.start);
// }

$("#start_button").click(function() {
$(this).hide();
counter = setInterval(timer, 1000);
displayTrivia();
});

function timer() {
count--;
if(count <= 0) {
    clearInterval(count);
    return;
}

$("#timer").html("Time remaining:"+ "00:" + count + "secs");
}

function displayTrivia() {
$("#question_div").html(marvalQuestion[0].question);
question++;


var choicesArr = marvelQuestion[0].choices;
var buttonsArr = [];

for(var i = 0; i < choicesArr.length; i++) {
var button = $("<button>");
button.text(choicesArr[i]);
button.attr('data-id', i);
$('#choices_div').append(button);
   }

}

$('#choices_div').on('click', 'button', function (e) {
    userPick = $(this).data("id");
    marvelQuestion[0].validAnswer;
    if (userPick != marvelQuestion[0].validAnswer) {

        $('#choices_div').text("Wrong Answer!");
        incorrectAnswer++;

    } else if (userPick === marvelQuestion[0].validAnswer) {
        $('#choices_div').text("Correct!!!");
        correctAnswer++;

    }
});