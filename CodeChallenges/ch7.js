/*

- Remove the last item 
- Sort the remaining array items alphabetically
- Move the last item in the array to the first position
- Find the "USB drive" item in the array and move it to the last position
- Find the "laptop" item in the array and remove it

*/

const showExpectedResult = false;
const showHints = false;

const deskArray = [
  "pen",
  "camera",
  "phone",
  "notebook",
  "headphones",
  "laptop",
  "light bulb",
  "USB drive",
  "elephant",
];

const processArray = (deskArray) => {
  let newDeskArr = [...deskArray];

  // Your code starts here

  newDeskArr.pop();
  newDeskArr.sort();

  newDeskArr.unshift(newDeskArr.pop());

  newDeskArr.push(newDeskArr.splice(newDeskArr.indexOf("USB drive"), 1));

  newDeskArr.splice(newDeskArr.indexOf("laptop"), 1);

  // Your code ends here

  return newDeskArr;
};
