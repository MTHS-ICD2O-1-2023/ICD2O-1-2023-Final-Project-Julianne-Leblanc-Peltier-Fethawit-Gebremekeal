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
  let hours = timeInHours
  let minutes = timeInMinutes
  let seconds = timeInSeconds
  let timer = ((timeInHours) * 60 * 60) + ((timeInMinutes) * 60) + timeInSeconds

  /* const now = new Date()
  const seconds = now.getSeconds()
    let counter = timer */

  const countdownForSeconds = setInterval(function () {
    // timer goes down by 1
    timer += -1
    seconds += -1
    if (timer % 60 === 0) {
      minutes += -1
    }

    if (timer % 3600 === 0) {
      hours += -1
    }

    document.getElementById("timer-countdown").innerHTML = hours + "h " + minutes + "m " + seconds + "s"

    if (timer < 0) {
      // play noise
      clearInterval(countdownForSeconds)
      document.getElementById("timer-countdown").innerHTML = "DONE"
    }
  }, 1000)
}
