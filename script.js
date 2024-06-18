// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html

// when button is clicked, runs timer
function timerStart() {
  // variables
  const timeInHours = parseInt(document.getElementById("timer-hours").value)
  const timeInMinutes = parseInt(document.getElementById("timer-minutes").value)
  const timeInSeconds = parseInt(document.getElementById("timer-seconds").value)
  let hours = timeInHours
  let minutes = timeInMinutes
  let seconds = timeInSeconds
  
  // https://developer.mozilla.org/en-US/docs/Web/API/setInterval
  const countdown = setInterval(function () {
    // timer goes down by 1
    seconds += -1
    if (hours == 0 && minutes == 0 && seconds == 0) {
      clearInterval(countdown)
    } else if (seconds == 0 && minutes !== 0) {
      minutes += -1
      seconds = 59
    } else if (minutes == 0 && hours !== 0) {
      hours += -1
      minutes = 59
    }

    document.getElementById("timer-countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s"

    if (hours == 0 && minutes == 0 && seconds == 0) {
      document.getElementById("timer-countdown").innerHTML = "DONE"
    }
  }, 1000) // 1000 milliseconds the function is called again
}
