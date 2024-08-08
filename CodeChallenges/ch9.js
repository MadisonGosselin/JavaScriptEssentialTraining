/*

- In the updatePage function, add an event listener to each of the four forms in the HTML
- Each event listener should listen for a submit event on the form the button belongs to
- When the button is clicked, the event listener should update the contents inside span for the relevant value

*/

function updatePage(document) {
  // Your code goes here.
  const allForms = document.querySelectorAll("form");

  allForms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const attributeName = event.target.getAttribute("data-target");
      const input = document.getElementById(`${attributeName}-input`);
      const span = document.getElementById(attributeName).querySelector("span");

      span.textContent = input.value;
    });
  });
}
