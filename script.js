let myLibrary = [];

function Book(title, author, read, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
     return `${title}, ${author}, ${this.read}, ${pages}`
}
};
// Main Elements: buttons + form //
const newBook = document.querySelector('.new-book-btn')
const form = document.querySelector('.new-book')
const addBook = document.querySelector('#book-adder')
const addRow = document.querySelector('#row-adder')
const readButton = document.querySelector('read')
const table = document.querySelector('.library-table');

// Form input elements //

  // Table elements

const tBodyRef = document.querySelector('.library-table')
const newRow = tBodyRef.insertRow();
const newCell = newRow.insertCell(); 
// const newText = newCell.appendChild(newText)


function showForm(e) {
form.style.display = 'block'
}
function addBookF(e) { 
let title = document.getElementById('book-title').value
let author = document.getElementById('book-author').value
let pages = document.getElementById('book-pages').value
var read = document.getElementById('read').value
console.log(read)
var book = new Book(title, author, read, pages);
  book.data = myLibrary.length;
  myLibrary.push(book)
  newTableRow();
}
 
  function newTableRow() {
    myTBody = document.getElementsByTagName('tbody')[0];
  for (i = myLibrary.length - 1; i < myLibrary.length; i++) {
    console.log(i)
    row = document.createElement("tr");
    titleCell = document.createElement('td')
    titleText = document.createTextNode(`${myLibrary[i].title}`)
    titleCell.appendChild(titleText)
    row.appendChild(titleCell)
    authorCell = document.createElement('td')
    authorText = document.createTextNode(`${myLibrary[i].author}`)
    authorCell.appendChild(authorText)
    row.appendChild(authorCell)
    pagesCell = document.createElement('td')
    pagesText = document.createTextNode(`${myLibrary[i].pages}`)
    pagesCell.appendChild(pagesText)
    row.appendChild(pagesCell)
    readCell = document.createElement('td')
    if (`${myLibrary[i].read}` == "yes") {
    readText = document.createTextNode(`${myLibrary[i].read}`)
    readCell.appendChild(readText)
    } else 
           if (`${myLibrary[i].read}` == 'no') {  
         readSelect = document.createElement('select')
         readYes = document.createElement('option')
         readYes.value = "yes"
         readYes.innerHTML = "Finished now"
         readNo = document.createElement('option')
         readNo.value = "no"
         readNo.innerHTML = "Still unfinished"
         readSelect.appendChild(readNo)
         readSelect.appendChild(readYes)
         readCell.appendChild(readSelect)
         readSelect.addEventListener('change', readSelectValue)  
         function readSelectValue() {
          
           myLibrary[i].read = 'yes'; // I need to align this 'i' with the data tag of the book.
           console.log(i)
           console.log(this) 
           readSelect = 'yes'
           console.log(readSelect.value)
          console.log(myLibrary[i].read)
          if (readSelect.value == 'yes') {
            readText = document.createTextNode(`${myLibrary[i].read}`)
            console.log(i)
            readCell.removeChild(readSelect)
            readCell.appendChild(readText)
          }
          }  
    }
    row.appendChild(readCell)
    deleteCell = document.createElement('td')
    deleteButton = document.createElement(`button`)
    deleteButton.type = 'button'
    deleteButton.innerHTML = 'Delete book'
    deleteButton.className = 'delete-btns'
    deleteCell.appendChild(deleteButton)
    deleteButton.onclick = function() {
     myTBody.removeChild(this.parentNode.parentNode);
     `${myLibrary[i]}`.delete;
     index = myLibrary.indexOf`${i}`
     myLibrary.splice(index, 1)
     console.log(myLibrary)
     document.getElementById('book-title').value = ' '
    };
    row.appendChild(deleteCell)
    myTBody.appendChild(row);
  };
  function clearInputs() {
    document.getElementById('book-title').value = ' '
    document.getElementById('book-author').value = ' '
    document.getElementById('book-pages').value = ' '
    document.getElementById('read').value = 'Choose here'
  }
  clearInputs()
};







newBook.addEventListener('click', showForm)
addBook.addEventListener('click', addBookF)