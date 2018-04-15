(function () {
  var app = {
 
    cacheDom: function () {

      // this.$newGameBtnAsChild = $(".clickable #newGameBtn");
      this.$newGameBtn = $(".clickable #newGameBtn");
      this.$clickable = $(".clickable");

    },

// [*] bug - clicks are allowed with start game screen
// [*] feature - gif between questions
// [*] feature - start over
// [*] feature - dynamic questions
// * markdown document
// [*] UI background etc

    eventRegistry: function () {
      this.$clickable.on("click", questions.validateAnswer);
      this.$newGameBtn.on("click", function(e) {e.stopPropagation();});
      this.$newGameBtn.on("click", questions.renderNext);
      events.on("timeUp", questions.renderFailure);
    },

    main: function () {
      this.cacheDom();
      questions.toggleClickable();
      this.eventRegistry();
    },

  };

  app.main();

})();
