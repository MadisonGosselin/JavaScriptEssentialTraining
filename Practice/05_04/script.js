/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
 */
var log = document.querySelector(".page-header__heading");
console.log("heading", log);

log = document.querySelector("main");
console.log("main", log);

log = document.querySelector(".backpack__features");
console.log("ul", log);

log = document.querySelectorAll(".backpack__features");
console.log("ul All", log);

log = document.querySelector("ul li.backpack__color");
console.log("Element of li in ul", log);
