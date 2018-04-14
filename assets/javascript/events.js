var events = (function(){

    var events  = {};
  
    var on = function(typeOfEvent, eventCallBack){
        events[typeOfEvent] = events[typeOfEvent] || [];
        events[typeOfEvent].push(eventCallBack);
    };

    var emit = function(typeOfEvent, paramData){
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


