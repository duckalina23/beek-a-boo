let tenBreakMinutes = 10;

// This variable is the current time
let oldDateObj = new Date();

  // This variable is the time we're counting down to
let countDownDate = new Date(oldDateObj.getTime() + tenBreakMinutes*60000);

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = "Break timer: " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    window.close();
  }
}, 1000);