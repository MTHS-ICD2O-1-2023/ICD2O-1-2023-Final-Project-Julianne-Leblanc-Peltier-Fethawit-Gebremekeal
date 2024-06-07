// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html

// when button is clicked, runs timer - basic IDEA of code, still setting up
function timerStart() {
  // variables
  const timeInHours = parseInt(document.getElementById("timer-hours").value)
  const timeInMinutes = parseInt(document.getElementById("timer-minutes").value)
  const timeInSeconds = parseInt(document.getElementById("timer-seconds").value)
  let timer = ((timeInHours) * 60 * 60) + ((timeInMinutes) * 60) + timeInSeconds
  let counter = 0
  let hours = timeInHours
  let minutes = timeInMinutes
  let seconds = timeInSeconds


  /* const now = new Date()
  const seconds = now.getSeconds()
    let counter = timer */

  const countdownForSeconds = setInterval(function () {
    // timer goes down by 1
    counter ++
    seconds += -1
    if (seconds == 0) {
      minutes += -1
      seconds = 59
      if (minutes == 0)
        hours += -1
        minutes = 59
    }

    document.getElementById("timer-countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s"

    if (counter == timer) {
      // play noise
      clearInterval(countdownForSeconds)
      document.getElementById("timer-countdown").innerHTML = "DONE"
    }
  }, 1000)
}
