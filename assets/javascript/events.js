var events = (function(){

    var events  = {};
  
    var on = function(typeOfEvent, eventCallBack){
        // console.log("event on called : " + typeOfEvent + " - " + events + " - " + eventCallBack);
        events[typeOfEvent] = events[typeOfEvent] || [];
        events[typeOfEvent].push(eventCallBack);
    };

    var emit = function(typeOfEvent, paramData){
      console.log("emit called for even type " + typeOfEvent)
      console.log("paramData was  " + paramData)
      if(events[typeOfEvent]) {
        events[typeOfEvent].forEach(function(elem){
          elem(paramData);
        });
      }
    };

    return {
        on:on,
        emit:emit
    };
})();


