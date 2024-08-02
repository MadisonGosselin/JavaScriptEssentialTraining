// JavaScript code​​​​​​‌​‌‌‌​​​​​‌‌​‌‌​​​​​​‌‌​‌ below
// Change these values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

// Setup data
const navContent = `
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Backpacks</a></li>
      <li><a href="#">Other things</a></li>
      <li><a href="#">Contact</a></li>
`;

function createNavMenu(document) {
  // Your code starts here

  const siteheader = document.querySelector(".siteheader");

  const newUL = document.createElement("ul");
  newUL.innerHTML = navContent;

  const newNav = document.createElement("nav");
  newNav.classList.add("main-navigation");
  newNav.append(newUL);

  siteheader.append(newNav);

  // Your code ends here
}
