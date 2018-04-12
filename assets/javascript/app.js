(function(){
  var app = {
    questions: [
      {
        question: "What is your favorite color?",
        choice1: "red",
        choice2: "blue",
        choice3: "green",
        choice4: "yello",
        correctAnswer: "choice-1"
      }
    ],
  
    cacheDom : function() {
        this.$question = $("#questions");
        this.$choice1 = $("#choice-1");
        this.$choice2 = $("#choice-2");
        this.$choice3 = $("#choice-3");
        this.$choice4 = $("#choice-4");
        this.$options = $(".options");
        this.$nextQtnBtn = $("#nextQtnBtn");
    },
  
    getRandomQA: function() {
      var randNum = Math.floor(Math.random() * this.questions.length);
      return this.questions[randNum];
    },
  
    render: function(obj) {
      this.$question.text(obj.question);
      this.$choice1.text(obj.choice1);
      this.$choice2.text(obj.choice2);
      this.$choice3.text(obj.choice3);
      this.$choice4.text(obj.choice4);
      this.correctAnswer =obj.correctAnswer;
  },
  
    eventRegistry : function () {
      this.$options.on("click", this.validateChoice);
      this.$nextQtnBtn.on("click", this.init.bind(this));
  
    },
  
   
  
    validateChoice : function() {
  
      console.log(this.id);
      console.log(app.correctAnswer);

      if(this.id===app.correctAnswer) {
        console.log("correct answer!");
      }
  
    },
  
    init : function(){
      var qObj = this.getRandomQA();
      this.render(qObj);
    },
  
    main: function() {
        this.cacheDom();
        this.init();
        this.eventRegistry();
    }
  };
  
  app.main();
  
  })();
  