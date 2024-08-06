/*

- Make an object construtor for Book objects
- The constructor must have properties for "title", "author", "ISBN" and "publicationYear"

*/

const showExpectedResult = false;
const showHints = false;

const bookTitle = "Alice's Adventures in Wonderland";
const bookAuthor = "Lewis Carroll";
const bookPubYear = 1865;
const bookISBN = 9798369203415;

// Your code starts here

function Book(title, author, ISBN, publicationYear) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.publicationYear = publicationYear;
}

// Your code ends here
