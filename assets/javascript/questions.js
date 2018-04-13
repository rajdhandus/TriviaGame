var questions = (function () {

    var questions = [
        {
            question: "What is your favorite color?",
            choice1: "red",
            choice2: "blue",
            choice3: "green",
            choice4: "yello",
            correctAnswer: "choice-1"
        },
        {
            question: "What is your favorite game?",
            choice1: "baseball",
            choice2: "football",
            choice3: "soccer",
            choice4: "cricket",
            correctAnswer: "choice-1"
        },
        {
            question: "What is your favorite food?",
            choice1: "noodles",
            choice2: "fried chicken",
            choice3: "grits and shrimp",
            choice4: "burger",
            correctAnswer: "choice-1"
        },
        {
            question: "What is your favorite dog?",
            choice1: "dalmation",
            choice2: "poodle",
            choice3: "soccer",
            choice4: "cricket",
            correctAnswer: "choice-1"
        },
        {
            question: "What is your favorite vehicle?",
            choice1: "honda",
            choice2: "nissan",
            choice3: "volkswagen",
            choice4: "audi",
            correctAnswer: "choice-1"
        }];


    var questionIndex = 0;

    var $question = $("#questions");
    var $choice1 = $("#choice-1");
    var $choice2 = $("#choice-2");
    var $choice3 = $("#choice-3");
    var $choice4 = $("#choice-4");

    var currentCorrectAnswer;

    var renderNext = function() {
        if(questionIndex<questions.length-1) {
            var currentQuestion = questions[questionIndex];
            $question.text(currentQuestion.question);
            $choice1.text(currentQuestion.choice1);
            $choice2.text(currentQuestion.choice2);
            $choice3.text(currentQuestion.choice3);
            $choice4.text(currentQuestion.choice4);
            currentCorrectAnswer = currentQuestion.correctAnswer;
        } else {
            
        }
        questionIndex++;
    };

    var renderSuccess = function(){
        $question.text("Correct!!");
        $choice1.text(currentQuestion.choice1);
        $choice2.text(currentQuestion.choice2);
        $choice3.text(currentQuestion.choice3);
        $choice4.text(currentQuestion.choice4);
    };

    var renderFailure = function(){
        $question.text("Sorry.....");
        $choice1.text(currentQuestion.choice1);
        $choice2.text(currentQuestion.choice2);
        $choice3.text(currentQuestion.choice3);
        $choice4.text(currentQuestion.choice4);
    };

    var validateAnswer = function (clickedElem) {
        if(clickedElem===currentCorrectAnswer) {

        } else {

        }
    }

    return {
        renderNext : renderNext,
        renderFailure : renderFailure,
        renderSuccess : renderSuccess
    };
})();