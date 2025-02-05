
let myTimer = setInterval(myClock, 1000); // Declare a global variable

function myClock(){
  let currentTime = new Date();
  let day = currentTime.getDay();
  // console.log(day);
  
  switch(day){
    case 0:
      console.log('Sunday');
      break;
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
      break;
    case 5:
      console.log('Friday');
      break;
    case 6:
      console.log('Saturday');
      break;
    default:
      console.log(`${day} is not a day`);
      break;
  }
  
  let clock = document.getElementById("clock");
  clock.innerHTML = currentTime.toLocaleTimeString();

  let date = document.getElementById("date");
  console.log(day);
  date.innerHTML = `${currentTime.toLocaleDateString()}`;
  
}

// Start the clock
function startClock() {
  if (!myTimer) { // Only start if there's no active interval
    myTimer = setInterval(myClock, 1000);
  }
}

// Stop the clock
function stopClock() {
  clearInterval(myTimer);
  myTimer = null; // Reset the timer variable
}

