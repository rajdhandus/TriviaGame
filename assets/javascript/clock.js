var clock = (function () {

    var $timeComponent = $("#timeInSeconds");

    var isClockRunning = false;

    var reset = function(){
        $timeComponent.text(10);
        isClockRunning = false;
    };

    var reduceTime = function () {
        var timeRemaining = parseInt($timeComponent.text());
        if(timeRemaining<=1) {
            pauseClock();
            events.emit("timeUp", true);
            clearInterval(isClockRunning);
            questions.toggleClickable();
            setTimeout(questions.renderNext,5000);
        }
        $timeComponent.text(timeRemaining - 1);
    };

    var startClock = function () {

        if (isClockRunning === false) {
            isClockRunning = setInterval(reduceTime, 1000);
        } else {
        }
    };

    var pauseClock = function () {
            clearInterval(isClockRunning);
            isClockRunning = false;
    };

    var stopClock = function () {
            pauseClock(isClockRunning);
            reset();
    };

    return {
        startClock : startClock,
        pauseClock : pauseClock,
        stopClock : stopClock,
        reset : reset
    }

})();