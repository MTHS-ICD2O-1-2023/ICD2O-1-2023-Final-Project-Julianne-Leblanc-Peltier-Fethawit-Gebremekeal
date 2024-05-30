// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html

// when button is clicked, runs timer - basic IDEA of code, still setting up
function timerStart() {
  // variables
  let timer = parseInt(document.getElementById("timer-input").value)
  const now = new Date()
  const seconds = now.getSeconds()
  let counter = timer

  while (True)
    // breaks out of loop if timer reaches zero
    if (timer == 0) {
      // will add sound file
      break
    }
    
    // if countdown reaches 0
    if (hours == 0 && minutes == 0 && seconds == 0) {
      // play noise
    }
}
