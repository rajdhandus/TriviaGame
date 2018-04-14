var clock = (function () {

    var $timeComponent = $("#timeInSeconds");

    var isClockRunning = false;

    var reset = function(){
        $timeComponent.text(6);
        isClockRunning = false;
    };

    var reduceTime = function () {
        var timeRemaining = parseInt($timeComponent.text());
        if(timeRemaining<=1) {
            pauseClock();
            console.log("i am still running with handle of " + isClockRunning);
            events.emit("timeUp", true);
            clearInterval(isClockRunning);
            setTimeout(questions.renderNext,2000);
        }
        $timeComponent.text(timeRemaining - 1);
    };

    var startClock = function () {
        console.log("startClock called " + $timeComponent.text() + " isClockRunning - "+isClockRunning);

        if (isClockRunning === false) {
            console.log("startClock called " + $timeComponent.text());
            isClockRunning = setInterval(reduceTime, 1000);
        } else {
            console.log("clock is already running ");
        }
    };

    var pauseClock = function () {
            console.log("pause Clock called " + isClockRunning);
            clearInterval(isClockRunning);
            isClockRunning = false;
    };

    var stopClock = function () {
            console.log("stopClock called " + isClockRunning.toString());
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