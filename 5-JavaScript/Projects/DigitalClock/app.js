const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
// const milisecondsElem = document.getElementById("miliseconds");
const amPmElem = document.getElementById("amPm");

function updateClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  //   let miliseconds = date.getMilliseconds();
  let amPm = "AM";

  if (hours >= 12) {
    amPm = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }
  if (hours === 0) {
    hours = 12; // Midnight edge case
  }

  // Add leading zeros to single-digit numbers
  hoursElem.innerText = hours;
  minutesElem.innerText = minutes;
  secondsElem.innerText = seconds;
  //   milisecondsElem.innerText = miliseconds;
  amPmElem.innerText = amPm;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
