var clock = (function () {

    var $timeComponent = $("#timeInSeconds");

    var clockHandle;

    var reset = function(){
        clockHandle = undefined;
        $timeComponent.text(30);
        startClock();
    };

    var startClock = function () {
        console.log("startClock called " + $timeComponent.text() + " clockHandle - "+clockHandle);

        if (clockHandle === undefined) {
            console.log("startClock called " + $timeComponent.text());
            clockHandle = setInterval(function () {
                var timeRemaining = parseInt($timeComponent.text());
                if(timeRemaining===1) {
                    pauseClock();
                }
                console.log("startClock " + timeRemaining);
                $timeComponent.text(timeRemaining - 1);
            }, 1000);
        } else {

            console.log("clock is already running ");
        }
    };

    var pauseClock = function () {

        if (clockHandle != undefined) {
            console.log("pause Clock called " + clockHandle.toString());
            clearInterval(clockHandle);
            clockHandle = undefined;
        } else {
            console.log("clock handle is undefined so cannot be cancelled ");
        }
    };

    var stopClock = function () {

        if (clockHandle != undefined) {
            console.log("stopClock called " + clockHandle.toString());
            pauseClock(clockHandle);
            initializeClock();

        } else {
            console.log("clock is already running ");
        }
    };

    return {
        startClock : startClock,
        pauseClock : pauseClock,
        stopClock : stopClock,
        reset : reset
    }

})();