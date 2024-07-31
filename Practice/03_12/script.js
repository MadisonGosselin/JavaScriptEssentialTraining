/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objects by calling their properties and using their methods in the console.
 */

import Keyboard from "./Keyboard.js";
import MechanicalKeyboard from "./MechanicalKeyboard.js";

const workKeyboard = new Keyboard(
  "large",
  "black",
  50,
  true,
  false,
  false,
  false
);
const homeKeyboard = new MechanicalKeyboard(
  "small",
  "white",
  200,
  false,
  true,
  true,
  true,
  "red"
);

// console.log("Work Keyboard", workKeyboard);

console.log("Before changing stand:", workKeyboard.stand);
workKeyboard.changeStand(true);
console.log("Stand:", workKeyboard.stand);

// console.log("Home Keyboard:", homeKeyboard);

console.log("Home switches before change:", homeKeyboard.switchType);
homeKeyboard.changeSwitches("brown");
console.log("Home switches after change:", homeKeyboard.switchType);

console.log("Before changing stand:", homeKeyboard.stand);
homeKeyboard.changeStand(false);
console.log("Stand:", homeKeyboard.stand);
