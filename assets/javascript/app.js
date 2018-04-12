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
      // console.log("updateTime executed " + app.$timeInSeconds.text());
      let timeLeft = app.$timeInSeconds.text() - 1;
      if (timeLeft <= 0) {
        clearInterval(app.timerHook);
        app.emit("timeOverEvent", true);
      }
      app.$timeInSeconds.text(timeLeft);

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
      // app.on("answerChosen", this.validateChoice);
      // this.$options.on("click", this.validateChoice);
      // this.$options.on("click", function(){console.log("you clicked options")});
      this.$options.on("click", function(){app.emit("answerChosen", this)});
      // this.$options.on("click", app.emit("answerChosen", this));
      // this.$options.on("click", function(){"someone clicked options"});
      // console.log(JSON.stringify(app.nextQuestionClicked));
      // this.$nextQtnBtn.on("click", this.on("nextQuestion", app.nextQuestionClicked));
      this.$nextQtnBtn.on("click", this.init.bind(this));
      app.on("nextQuestion", this.nextQuestionClicked);
      app.on("answerChosen", this.validateChoice);
      app.on("timeOverEvent", this.toggleNextBtn);
    },

    validateChoice: function (param) {
      console.log(param);
      console.log(app.correctAnswer);
      if (param.id === app.correctAnswer) {
        console.log("correct answer!");
      }

    },

    init: function () {
      console.log("init function called");
      var qObj = this.getRandomQA();
      this.render(qObj);
      console.log(this.nextQuestionClicked);
    },

    main: function () {
      this.cacheDom();
      this.init();
      this.eventRegistry();
      this.timerHook = setInterval(this.updateTime, 1000);
    },

    toggleNextBtn : function(enable) {
      console.log("toggleNextBtn called with " + enable);
      if(!enable) {
        app.$nextQtnBtn.attr("disabled", "disabled");
      } else  {
        app.$nextQtnBtn.removeAttr("disabled");
      }
    },
  
    events : {},
  
    on: function(typeOfEvent, eventCallBack){
      console.log("on function : " + eventCallBack);
      this.events[typeOfEvent] = this.events[typeOfEvent] || [];
      this.events[typeOfEvent].push(eventCallBack);
      console.log(this.events[typeOfEvent]);
      console.log("event subscription detected");
    },

    emit: function(typeOfEvent, paramData){
      console.log("emit called for even type " + typeOfEvent)
      console.log("paramData was  " + paramData)
      if(this.events[typeOfEvent]) {
        this.events[typeOfEvent].forEach(function(elem){
          elem(paramData);
        });
      }
    },

    nextQuestionClicked : function() {
      console.log("event happened");
      app.emit("nextQuestion");
    }
  };

  app.main();

})();
