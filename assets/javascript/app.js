(function () {
  var app = {
 
    cacheDom: function () {

      this.$newGameBtnAsChild = $(".clickable #newGameBtn");
      this.$newGameBtn = $(".clickable #newGameBtn");
      this.$clickable = $(".clickable");

    },

    eventRegistry: function () {
      this.$clickable.on("click", questions.validateAnswer);
      this.$newGameBtnAsChild.on("click", function(e) {e.stopPropagation();});
      this.$newGameBtn.on("click", questions.renderNext);
      events.on("timeUp", questions.renderFailure);
    },

    main: function () {
      this.cacheDom();
      this.eventRegistry();
    },

  };

  app.main();

})();
