var questions = (function () {

    var questions = [
        {
            question: "How many red stripes are there on the United States flag?",
            choice1: "Five",
            choice2: "Six",
            choice3: "Seven",
            choice4: "Eight",
            correctAnswer: "choice-3"
        },
        {
            question: "What is the largest rodent found in North America?",
            choice1: "Beaver",
            choice2: "Fox squirrel",
            choice3: "Gopher",
            choice4: "Muskrat",
            correctAnswer: "choice-1"
        },
        {
            question: "What was Walt Disney's middle name?",
            choice1: "Timothy",
            choice2: "Allen",
            choice3: "Herbert",
            choice4: "Elias",
            correctAnswer: "choice-4"
        },
        {
            question: "Which U.S. President made the first telephone call to the moon?",
            choice1: "Richard Nixon",
            choice2: "John F Kennedy",
            choice3: "Lyndon B Johnson",
            choice4: "Ronald Reagen",
            correctAnswer: "choice-1"
        }];


    var wins = 0;
    var losses = 0;
    var questionIndex = 0;
    var isGameOver = false;
    var currentQstnAnswrd = false;

    var $question = $("#questions");
    var $choice1 = $("#choice-1");
    var $choice2 = $("#choice-2");
    var $choice3 = $("#choice-3");
    var $choice4 = $("#choice-4");
    var $correctAnswerPlace = $("#correctAnswerPlace");
    var $time = $("#time-remaining");
    var $timeText = $("#time-remaining");
    var $timeUnits = $("#time-units");

    var currentCorrectAnswer;

    var toggleClickable = function (exceptOne) {
        $choice1.toggleClass("options");
        $choice2.toggleClass("options");
        $choice3.toggleClass("options");
        $choice4.toggleClass("options");
    };

    var clearPreviousAns = function () {
        $choice1.removeClass("answer");
        $choice2.removeClass("answer");
        $choice3.removeClass("answer");
        $choice4.removeClass("answer");
    };

    var renderNext = function () {
        currentQstnAnswrd = false;
        $correctAnswerPlace.empty();
        if (questionIndex < questions.length) {
            clearPreviousAns();
            toggleClickable();
            var currentQuestion = questions[questionIndex];
            $choice1.text(currentQuestion.choice1);
            $choice2.text(currentQuestion.choice2);
            $choice3.text(currentQuestion.choice3);
            $choice4.text(currentQuestion.choice4);
            $timeText.text("Time Remaining: ");
            $timeUnits.text("Seconds");
            $question.text(currentQuestion.question);
            currentCorrectAnswer = currentQuestion.correctAnswer;
            clock.reset();
            clock.startClock();
        } else {
            gameOver();
        }

        questionIndex++;
    };

    var gameOver = function () {
        clearPreviousAns();
        $question.text("Game Over!");
        $choice1.text("Correct Answers : " + wins);
        $choice2.text("Wrong Answers : " + losses);
        $choice3.empty();
        $choice4.empty();
        clock.stopClock();
        $time.empty();
        isGameOver = true;
    }

    var renderSuccess = function ($answer) {
        if (!isGameOver) {
            wins++;
            $answer.addClass("answer");
            $correctAnswerPlace.html("<h1 style=\"color:green;\">Correct Answer!!<h1>");
        }
    };

    var renderFailure = function (timeOut, $answer) {
        if (!isGameOver) {
            if (timeOut) {
                $correctAnswerPlace.html("<h1 style=\"color:red;\">Time Up.....</h1>");
            } else {
                $answer.addClass("answer");
                $correctAnswerPlace.html("<h1 style=\"color:red;\">Wrong Answer.....</h1>");
            }
            losses++;
        }
    };

    var validateAnswer = function (clickedElem) {
        if (!isGameOver && !currentQstnAnswrd) {
            var $answerChosen = $(this);
            clock.pauseClock();
            toggleClickable();
            if ($answerChosen.attr("id") === currentCorrectAnswer) {
                renderSuccess($answerChosen);
                clock.pauseClock();
            } else {
                renderFailure(false, $answerChosen);
            }
            currentQstnAnswrd = true;
            setTimeout(renderNext, 3000);
        }
        else {
        }
    }


    return {
        renderNext: renderNext,
        renderFailure: renderFailure,
        renderSuccess: renderSuccess,
        validateAnswer: validateAnswer
    };
})();