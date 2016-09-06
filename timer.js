var deadline = 'September 6 2016 21:20:59';

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor( (t/1000) % 60 ),
      minutes = Math.floor( (t/1000/60) % 60 ),
      hours   = Math.floor( (t/(1000*60*60)) % 24 ),
      days    = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var timeInterval = setInterval(function() {
    var t = getTimeRemaining(endtime);
    clock.innerHTML = 'days: '    + t.days    + '<br>' +
                      'hours: '   + t.hours   + '<br>' +
                      'minutes: ' + t.minutes + '<br>' +
                      'seconds: ' + t.seconds;
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}
