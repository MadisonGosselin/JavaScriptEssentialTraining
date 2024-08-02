/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

document.querySelector("main ul").classList.add("firstUL");
document.querySelector("main ul li").classList.add("firstLI");

document.querySelector("main ul").classList.add("temp_class");

document.querySelector("main ul").classList.remove("temp_class");

document
  .querySelector("main ul")
  .setAttribute("alt", "This is an unordered list");

console.log(
  "alt attribute:",
  document.querySelector("main ul").getAttribute("alt")
);

document
  .querySelector("main ul")
  .setAttribute("alt", "This is a changed alt attribute");

console.log(
  "alt attribute:",
  document.querySelector("main ul").getAttribute("alt")
);

document.querySelector("main ul li.backpack__volume").style.color = "lightblue";
document.querySelector("main ul li.backpack__volume").style.backgroundColor =
  "darkblue";
