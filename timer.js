var deadline = 'September 27 2016 21:20:59';

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

  var daysspan    = clock.querySelector('.days'),
      hoursspan   = clock.querySelector('.hours'),
      minutesspan = clock.querySelector('.minutes'),
      secondsspan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysspan.innerHTML    = ('0' + t.days).slice(-2);
    hoursspan.innerHTML   = ('0' + t.hours).slice(-2);
    minutesspan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsspan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  updateClock(); // run function once at first to avoid delay

  var timeInterval = setInterval(updateClock, 1000);
}
