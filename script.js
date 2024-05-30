// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html

// when button is clicked, runs timer - basic IDEA of code, still setting up
function timerStart() {
  // variables
  let timerSeconds = parseInt(document.getElementById("timer-seconds").value)
  let timerMinutes = parseInt(document.getElementById("timer-minutes").value)
  let timerHours = parseInt(document.getElementById("timer-hours").value)
  const now = new Date()
  const seconds = now.getSeconds()

  while (True)
    // breaks out of loop if timer reaches zero
    if (timerHours == 0 && timerMinutes == 0 && timerSeconds == 0) {
      // play noise
      break
    }
}
