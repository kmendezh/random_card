/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Generate random numbers from 1-13
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  let letter = "J";
  if (randomNumber == 12) {
    letter = "Q";
  } else if (randomNumber == 13) {
    letter = "K";
  } else if (randomNumber == 2) {
    letter = "A";
  }

  if (randomNumber < 11) {
    document.getElementById("number").innerHTML = randomNumber;
  } else {
    document.getElementById("number").innerHTML = letter;
  }

  // Generate random symbol
  let symbol_option = Math.floor(Math.random() * 4) + 1;
  let symbol_number = "\u2660";
  switch (symbol_option) {
    case 1: // Heart
      symbol_number = "\u2665";
      break;
    case 2: // Spade
      symbol_number = "\u2660";
      break;
    case 3: // Clubs
      symbol_number = "\u2663";
      break;
    case 4: // Diamonds
      symbol_number = "\u2666";
      break;
    default:
      break;
  }

  document.getElementById("upper_icon").innerHTML = symbol_number;
  document.getElementById("lower_icon").innerHTML = symbol_number;

  // Generate random color
  let color = Math.floor(Math.random() * 2);
  if (color == 1) {
    // Black
    document.getElementById("number").style.color = "red";
    document.getElementById("upper_icon").style.color = "red";
    document.getElementById("lower_icon").style.color = "red";
  }
};
