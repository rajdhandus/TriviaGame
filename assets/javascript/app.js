(function () {
  var app = {
 
    // correctAnswers : 0,
    // incorrectAnswers : 0,

    cacheDom: function () {
      // this.$question = $("#questions");
      // this.$choice1 = $("#choice-1");
      this.$newGameBtn = $("#newGameBtn");
      // this.$choice3 = $("#choice-3");
      // this.$choice4 = $("#choice-4");
      this.$options = $(".options");
      // this.$nextQtnBtn = $("#nextQtnBtn");
      // this.$timeInSeconds = $("#timeInSeconds");
    },

    render: function (obj) {
      // this.$question.text("");
      // this.$choice1.text("");
      // this.$choice2.html("<button class=\"btn btn-lg btn-primary\"> Start the Game!!!</button>");
      // this.$choice3.text("");
      // this.$choice4.text("");
      // this.correctAnswer = obj.correctAnswer;
    },

    eventRegistry: function () {
      $(document).on("click", this.$options, questions.validateAnswer);
      // this.$options.on("click", questions.validateAnswer);
      this.$newGameBtn.on("click", questions.renderNext);
      // this.$nextQtnBtn.on("click", this.nextQuestionClicked);
      // events.on("nextQuestion", this.toggleNextBtn);
      // events.on("answerChosen", this.validateChoice);
      // events.on("timeOverEvent", this.toggleNextBtn);
      // events.on("timeOverEvent", this.showCorrectAnswer);
      // events.on("correctAnswerEvent", this.correctAnswerChosen);
      // events.on("incorrectAnswerEvent", this.incorrectAnswerChosen);
      events.on("timeUp", questions.renderFailure);


    },

    // showCorrectAnswer : function() {
    //   app.$question.text("Correct Answer is...");
    //   console.log(app.correctAnswer);
    //   var tmp = "#" + app.correctAnswer;
    //   $(tmp).attr("style", "color:red;");
    // },

    answerChosen : function(){
      console.log(events);
      events.emit("answerChosen", this);
      clock.pauseClock();
    },

    // correctAnswerChosen : function() {
    //   app.$question.text("Correct Answer!");
    //   app.$options.text("");
    //   clearInterval(app.timerHook);
    //   setTimeout(app.toggleNextBtn(true), 2000);
    // },

    // incorrectAnswerChosen : function() {
    //   app.$question.text("Wrong Answer!");
    //   app.$options.text("");
    //   clearInterval(app.timerHook);
    //   setTimeout(app.toggleNextBtn(true), 2000);
    // },

    // validateChoice: function (param) {
    //   console.log(param);
    //   console.log(app.correctAnswer);
    //   if (param.id === app.correctAnswer) {
    //     console.log("correct answer!");
    //     events.emit("correctAnswerEvent");
    //   } else {
    //     events.emit("incorrectAnswerEvent");
    //   }
    // },

    init: function () {
      // this.render();
      // questions.renderNext();
    },

    main: function () {
      this.cacheDom();
      this.init();
      this.eventRegistry();
    },

    // toggleNextBtn : function(enable) {
    //   setTimeout(app.init,3000);
    //   console.log("toggleNextBtn called with " + enable);
    //   if(!enable) {
    //     app.$nextQtnBtn.attr("disabled", "disabled");
    //   } else  {
    //     app.$nextQtnBtn.removeAttr("disabled");
    //   }
    // },

    // nextQuestionClicked : function() {
    //   console.log("event happened");
    //   events.emit("nextQuestion");
    // }
  };

  app.main();

})();
