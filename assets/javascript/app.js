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
    },
    {
      question: "What is your favorite food?",
      choice1: "noodles",
      choice2: "fried chicken",
      choice3: "grits and shrimp",
      choice4: "burger",
      correctAnswer: 4
    },
    {
      question: "What is your favorite dog?",
      choice1: "dalmation",
      choice2: "poodle",
      choice3: "soccer",
      choice4: "cricket",
      correctAnswer: 4
    },
    {
      question: "What is your favorite vehicle?",
      choice1: "honda",
      choice2: "nissan",
      choice3: "volkswagen",
      choice4: "audi",
      correctAnswer: 4
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
    this.correctAnswer = obj.correctAnswer;
  },

  eventRegistry : function () {
    this.$options.on("click", this.validateChoice.bind(this));
    this.$nextQtnBtn.on("click", this.init.bind(this));
    // this.$choice2.on("click", this.highlightChoice.bind(this));
    // this.$choice3.on("click", this.highlightChoice.bind(this));
    // this.$choice4.on("click", this.highlightChoice.bind(this));
  },

  validateChoice : function() {
    // alert(this);
    // console.log(this);
    console.log(this.correctAnswer);
    // console.log(this.$("h1").attr("id"));
    // if(this.correctAnswer==this.attr("id")) {

    // }
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
