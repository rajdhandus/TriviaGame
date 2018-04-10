function getRandomQA() {
    var randNum = Math.floor(Math.random() * 2);
    return questions[randNum];
}

function showQuestion(obj) {
    $("#questions").text(obj.question);
    $("#choice-1").text(obj.choice1);
    $("#choice-2").text(obj.choice2);
    $("#choice-3").text(obj.choice3);
    $("#choice-4").text(obj.choice4);
}

function main() {
    var qObj = getRandomQA();
    showQuestion(qObj);
}

var questions = [
    {
        question : "What is your favorite color?",
        choice1 : "red",
        choice2 : "blue",
        choice3 : "green",
        choice4 : "yello",
        correctAnswer : 1
    },{
        question : "What is your favorite game?",
        choice1 : "baseball",
        choice2 : "football",
        choice3 : "soccer",
        choice4 : "cricket",
        correctAnswer : 4
    }
]