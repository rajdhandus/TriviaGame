(function(){
var app = {
  questions: [
    {
      question: "What is your favorite color?",
      choice1: "red",
      choice2: "blue",
      choice3: "green",
      choice4: "yello",
      correctAnswer: 1
    },
    {
      question: "What is your favorite game?",
      choice1: "baseball",
      choice2: "football",
      choice3: "soccer",
      choice4: "cricket",
      correctAnswer: 4
    }
  ],

  cacheDom : function() {
      this.$question = $("#questions");
      this.$choice1 = $("#choice-1");
      this.$choice2 = $("#choice-1");
      this.$choice3 = $("#choice-1");
      this.$choice4 = $("#choice-1");
  },

  getRandomQA: function() {
    var randNum = Math.floor(Math.random() * 2);
    return this.questions[randNum];
  },

  showQuestion: function(obj) {
    this.$question.text(obj.question);
    this.$choice1.text(obj.choice1);
    this.$choice2.text(obj.choice2);
    this.$choice3.text(obj.choice3);
    this.$choice4.text(obj.choice4);
  },

  main: function() {
      this.cacheDom();
      var qObj = this.getRandomQA();
      this.showQuestion(qObj);
  }
};

app.main();

})();
