// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html

// when button is clicked, runs timer - basic IDEA of code, still setting up
function timerStart() {
  // variables
  let timeInHours = parseInt(document.getElementById("timer-hours").value)
  let timeInMinutes = parseInt(document.getElementById("timer-minutes").value)
  let timeInSeconds = parseInt(document.getElementById("timer-seconds").value)
  let timer = timeInHours + timeInMinutes + timeInSeconds

  /* const now = new Date()
  const seconds = now.getSeconds()
    let counter = timer */

  const countdown = setInterval(function () {
    // tuner goes down by 1
    timer += -1
    counter++
    if (counter % 60 == 0) {
      timeInMinutes += -1
    }

    if (counter % 3600 == 0) {
      timeInHours += -1
    }

    document.getElementById("timer-countdown").innerHTML =
      timeInHours + "h " + timeInMinutes + "m " + timeInSeconds + "s"

    if (timer < 0) {
      // play noise
      clearInterval(countdown)
      document.getElementById("timer-countdown").innerHTML = "DONE"
    }
  }, 1000)
}
