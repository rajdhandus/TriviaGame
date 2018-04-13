(function () {
  var app = {
    questions: [
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
      }
    ],

    correctAnswers : 0,
    incorrectAnswers : 0,

    cacheDom: function () {
      this.$question = $("#questions");
      this.$choice1 = $("#choice-1");
      this.$choice2 = $("#choice-2");
      this.$choice3 = $("#choice-3");
      this.$choice4 = $("#choice-4");
      this.$options = $(".options");
      this.$nextQtnBtn = $("#nextQtnBtn");
      this.$timeInSeconds = $("#timeInSeconds");
    },

    getRandomQA: function () {
      var randNum = Math.floor(Math.random() * this.questions.length);
      console.log("random number generated");
      return this.questions[randNum];
    },

    updateTime: function () {
      // let timeLeft = app.$timeInSeconds.text() - 1;
      // if (timeLeft <= 0) {
      //   clearInterval(app.timerHook);
      //   events.emit("timeOverEvent", true);
      // }
      // app.$timeInSeconds.text(timeLeft);

      clock.startClock();

    },

    render: function (obj) {
      this.$question.text(obj.question);
      this.$choice1.text(obj.choice1);
      this.$choice2.text(obj.choice2);
      this.$choice3.text(obj.choice3);
      this.$choice4.text(obj.choice4);
      this.correctAnswer = obj.correctAnswer;
    },

    eventRegistry: function () {
      this.$options.on("click", this.answerChosen);
      this.$nextQtnBtn.on("click", this.nextQuestionClicked);
      events.on("nextQuestion", this.toggleNextBtn);
      events.on("answerChosen", this.validateChoice);
      events.on("timeOverEvent", this.toggleNextBtn);
      events.on("timeOverEvent", this.showCorrectAnswer);
      events.on("correctAnswerEvent", this.correctAnswerChosen);
      events.on("incorrectAnswerEvent", this.incorrectAnswerChosen);
    },

    showCorrectAnswer : function() {
      app.$question.text("Correct Answer is...");
      console.log(app.correctAnswer);
      var tmp = "#" + app.correctAnswer;
      $(tmp).attr("style", "color:red;");
    },

    answerChosen : function(){
      console.log(events);
      events.emit("answerChosen", this);
      clock.pauseClock();
    },

    correctAnswerChosen : function() {
      app.$question.text("Correct Answer!");
      app.$options.text("");
      clearInterval(app.timerHook);
      setTimeout(app.toggleNextBtn(true), 2000);
    },

    incorrectAnswerChosen : function() {
      app.$question.text("Wrong Answer!");
      app.$options.text("");
      clearInterval(app.timerHook);
      setTimeout(app.toggleNextBtn(true), 2000);
    },

    validateChoice: function (param) {
      console.log(param);
      console.log(app.correctAnswer);
      if (param.id === app.correctAnswer) {
        console.log("correct answer!");
        events.emit("correctAnswerEvent");
      } else {
        events.emit("incorrectAnswerEvent");
      }
    },

    init: function () {
      var qObj = app.getRandomQA();
      app.render(qObj);
      clock.reset();
    },

    main: function () {
      this.cacheDom();
      this.init();
      this.eventRegistry();
      this.timerHook = setInterval(this.updateTime, 1000);
    },

    toggleNextBtn : function(enable) {
      setTimeout(app.init,3000);
      console.log("toggleNextBtn called with " + enable);
      if(!enable) {
        app.$nextQtnBtn.attr("disabled", "disabled");
      } else  {
        app.$nextQtnBtn.removeAttr("disabled");
      }
    },

    nextQuestionClicked : function() {
      console.log("event happened");
      events.emit("nextQuestion");
    }
  };

  app.main();

})();
