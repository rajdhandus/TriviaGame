var questions = (function () {

    var questions = [
        {
            question: "How many red stripes are there on the United States flag?",
            choice1: "Five",
            choice2: "Six",
            choice3: "Seven",
            choice4: "Eight",
            correctAnswer: "Seven"
        },
        {
            question: "What is the largest rodent found in North America?",
            choice1: "Beaver",
            choice2: "Fox squirrel",
            choice3: "Gopher",
            choice4: "Muskrat",
            correctAnswer: "Beaver"
        },
        {
            question: "What was Walt Disney's middle name?",
            choice1: "Timothy",
            choice2: "Allen",
            choice3: "Herbert",
            choice4: "Elias",
            correctAnswer: "Elias"
        },
        {
            question: "Which U.S. President made the first telephone call to the moon?",
            choice1: "Richard Nixon",
            choice2: "John F Kennedy",
            choice3: "Lyndon B Johnson",
            choice4: "Ronald Reagen",
            correctAnswer: "Richard Nixon"
        }];


    // $.ajax({
    //     url: "https://opentdb.com/api.php?amount=10&category=28&difficulty=easy&type=multiple",
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response);
    // });


    var wins = 0;
    var losses = 0;
    var questionIndex = 0;
    var isGameOver = false;
    var currentQstnAnswrd = false;
    var gameStarted = false;

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

        $correctAnswerPlace.off("click");
        currentQstnAnswrd = false;
        gameStarted = true;
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
            $question.attr("style", "").text(currentQuestion.question);
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
        $question.attr("style", "").text("Game Over!");
        $choice1.text("Correct Answers : " + wins);
        $choice2.text("Wrong Answers : " + losses);
        $choice3.empty();
        $choice4.empty();
        clock.stopClock();
        $time.empty();
        isGameOver = true;
        gameStarted = false;

        $correctAnswerPlace.append("<button id=\"startOverBtn\" class=\"btn btn-lg btn-danger\">Start Over</button>");

        $correctAnswerPlace.on("click", function(){
            console.log("hello there!");
            // toggleClickable();
            wins = 0;
            losses = 0;
            questionIndex = 0;
            isGameOver = false;
            currentQstnAnswrd = false;
            gameStarted = false;
            clock.pauseClock();
            clock.reset()
            // clock.stopClock();
            renderNext();
            // app.main();
        });
    }

    var renderSuccess = function ($answer) {
        if (!isGameOver) {
            wins++;

            $.ajax({
                url: "https://api.giphy.com/v1/gifs/search?q=success&api_key=Na04YVp5uWKzlI9xdisIrOKM3hKzEPoN&limit=10",
                method: "GET"
            }).then(function (response) {
                console.log(response.data[0].images.downsized_medium.url);
                var index = generateRandNum(10);
                $correctAnswerPlace.html("<img src=" + response.data[index].images.downsized_medium.url + " alt=\"success\">");
            });

            // $answer.addClass("answer");
            $question.text("Correct Answer!!").attr("style", "color:green")
            $choice1.text("");
            $choice2.text("");
            $choice3.text("");
            $choice4.text("");


        }
    };

    var generateRandNum = function (range) {
        // return 0;
        return Math.floor(Math.random() * range);
    };

    var renderFailure = function (timeOut) {
        if (!isGameOver) {
            if (timeOut) {
                // $correctAnswerPlace.html("<h1 style=\"color:red;\">Time Up.....</h1>");

                $.ajax({
                    url: "https://api.giphy.com/v1/gifs/search?q=time+up&api_key=Na04YVp5uWKzlI9xdisIrOKM3hKzEPoN&limit=10",
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    var index = generateRandNum(10);
                    console.log(index);
                    console.log(response.data[index].images.downsized_medium.url);
                    $correctAnswerPlace.html("<img src=" + response.data[index].images.downsized_medium.url + " alt=\"wrong\">");
                });

                // $answer.addClass("answer");
                $question.text("Time Up.....").attr("style", "color:red");
                $choice1.text("The Correct Answer was: " + currentCorrectAnswer);
                $choice2.text("");
                $choice3.text("");
                $choice4.text("");

            } else {
                // $answer.addClass("answer");
                // $correctAnswerPlace.html("<h1 style=\"color:red;\">Wrong Answer.....</h1>");


                $.ajax({
                    url: "https://api.giphy.com/v1/gifs/search?q=wrong&api_key=Na04YVp5uWKzlI9xdisIrOKM3hKzEPoN&limit=10",
                    method: "GET"
                }).then(function (response) {
                    console.log(response.data[0].images.downsized_medium.url);
                    var index = generateRandNum(10);
                    $correctAnswerPlace.html("<img src=" + response.data[index].images.downsized_medium.url + " alt=\"wrong\">");
                });

                // $answer.addClass("answer");
                $question.text("Wrong Answer.....").attr("style", "color:red");
                $choice1.text("The Correct Answer was: " + currentCorrectAnswer);
                $choice2.text("");
                $choice3.text("");
                $choice4.text("");


            }
            losses++;
        }
    };

    var validateAnswer = function () {

        if (gameStarted && !isGameOver && !currentQstnAnswrd) {
            var $answerChosen = $(this);
            clock.pauseClock();
            toggleClickable();
            if ($answerChosen.text() === currentCorrectAnswer) {
                renderSuccess($answerChosen);
                // clock.pauseClock();
            } else {
                renderFailure(false);
            }
            currentQstnAnswrd = true;
            setTimeout(renderNext, 5000);
        }
        else {

        }
    }


    return {
        renderNext: renderNext,
        toggleClickable: toggleClickable,
        renderFailure: renderFailure,
        renderSuccess: renderSuccess,
        validateAnswer: validateAnswer
    };
})();