// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: May 2024
// This file contains the JS functions for index.html

// when button is clicked, runs timer - basic IDEA of code, still setting up
function myButtonClicked() {
  // variables
  let timer = parseInt(document.getElementById("timer-input").value)
  let seconds = new Date().getTime() / 1000 

  while (True)
    // breaks out of loop if timer reaches zero
    if (timer == 0) {
      // will add sound file
      break
    }
    
    // will use seconds variable for if statement
    timer += -1
}
