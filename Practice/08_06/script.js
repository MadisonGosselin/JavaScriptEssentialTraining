/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function newElement(eleType, data) {
  const newElement = document.createElement(eleType);
  newElement.innerHTML = data;

  const addClass = () => {
    document.querySelector("main " + eleType).classList.add("newEle");
  };

  // use helper function to add element then add class
  addElement(newElement);
  addClass();
}

const addElement = function (element) {
  const main = document.querySelector("main");
  main.append(element);
};

newElement("article", `<h1>Hello, this is a new article!</h1>`);
