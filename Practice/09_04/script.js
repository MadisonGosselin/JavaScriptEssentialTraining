/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", (event) => {
    cell.style.outline = "2px solid red";
  });

  cell.addEventListener("mouseleave", (event) => {
    cell.style.outline = "";
  });

  cell.addEventListener("click", (event) => {
    cell.style.backgroundColor = "pink";
  });

  //   grid.addEventListener("mouseenter", (event) => {
  //     grid.style.backgroundColor = "grey";
  //   });

  //   grid.addEventListener("mouseleave", (event) => {
  //     grid.style.backgroundColor = "";
  //   });

  document.addEventListener("keydown", (event) => {
    if (event.key == "c") cell.style.backgroundColor = "";
  });
});

const container = document.querySelector("html");
let darkMode = false;

document.addEventListener("keydown", (event) => {
  if (event.key == "d") {
    if (darkMode) {
      darkMode = false;
      container.style.backgroundColor = "";
    } else {
      darkMode = true;
      container.style.backgroundColor = "grey";
    }
  }
});
