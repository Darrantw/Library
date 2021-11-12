let readLibrary = [];
let unreadLibrary = [];

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
const addBook = document.querySelector('.book-adder')
const addRow = document.querySelector('#row-adder')
const readButton = document.querySelector('read')
const table = document.querySelector('.library-table');

// Containers
const readBooksContainer = document.querySelector('.read');
const unreadBooksContainer = document.querySelector('.unread');


// let count = 0;

// function countAdd(e) {
//   count += 1;
// }

// function countMinus(e) {
//   console.log('minus here')
//   count -= 1;
// }

function showForm(e) {
form.style.display = 'block'
}
function addBookF(e) { 
let title = document.getElementById('book-title').value
let author = document.getElementById('book-author').value
let pages = document.getElementById('book-pages').value
let read = document.getElementById('read').value
if (title == '') {
  alert("Please enter a title")
  return;
}
if (author == '') {
  alert("Please enter an author")
  return;
}
console.log('I dont stop')
form.style.display = 'none'
var book = new Book(title, author, read, pages);
  if (title && author) {
    if (book.read == 'yes') {
    readLibrary.push(book)
    } else if (book.read == 'no') {
      unreadLibrary.push(book)
    }
  }
  // The next two lines clear inputs
  form.childNodes[1].childNodes[3].childNodes[9].value = '';
  form.childNodes[1].childNodes[3].childNodes[3].value = '';

  readBooksContainer.style.backgroundColor = "black";
  unreadBooksContainer.style.backgroundColor = "black";
  readBooksContainer.style.border = "15px solid brown";
  unreadBooksContainer.style.border = "15px solid white";
  function booky () {
    div = document.createElement("div");

    // Function to make books a random colour
    const setBg = () => {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      div.style.backgroundColor = "#" + randomColor;
    }
    div.style.backgroundColor = setBg(); 

    // Creating, appending and styling book elements
    thisTitle = document.createElement("h1")
    lineBreak = document.createElement("br")
    bookTitle = document.createTextNode(title);
    thisTitle.style.textAlign = "center"
    thisTitle.style.marginTop = "15%"
    thisTitle.style.backgroundColor = "hsla(0, 0%, 63%, 0.5)"
    thisTitle.appendChild(bookTitle)
    thisTitle.appendChild(lineBreak)
    thisAuthor = document.createElement("h2")
    bookAuthor = document.createTextNode('by ' + author)
    thisAuthor.style.fontStyle = "italic";
    thisAuthor.style.textAlign = "center"
    thisAuthor.style.borderBottom = "10px"
    thisAuthor.style.backgroundColor = "hsla(0, 0%, 63%, 0.5)"
    thisAuthor.appendChild(bookAuthor)
    deleteButton = document.createElement(`button`)
    deleteButton.type = 'button'
    deleteButton.innerHTML = 'X'
    deleteButton.className = 'delete-btns'

    // Delete books from container and myLibrary array.
    deleteButton.onclick = function() {
         let authorText = this.parentNode.childNodes[2].innerHTML.slice(3)
         let titleText = this.parentNode.childNodes[0].innerHTML
         console.log(authorText, titleText)
         let readStatus = this.parentNode.childNodes[4].value
         console.log(readStatus)
         if (readStatus == 'Read') {
          readLibrary.map((value, index) => {
            if ((readLibrary[index].author == authorText) && (readLibrary[index].title == titleText)) {
              readBooksContainer.removeChild(this.parentNode);
              readLibrary.splice(index, 1)
            }
            })
          } else if (readStatus == 'Unread') {
            unreadLibrary.map((value, index) => {
              if ((unreadLibrary[index].author == authorText) && (unreadLibrary[index].title == titleText)) {
                 unreadBooksContainer.removeChild(this.parentNode);
                unreadLibrary.splice(index, 1)
              }
              })
          } 
         };

        // Creating, styling and appending read toggle  
    readToggle = document.createElement("select")
    // readQuestion = document.createElement("option")
    readYes = document.createElement("option")
    readNo = document.createElement("option")
    // readQuestion.innerHTML = 'Have you read this book?'
    // readToggle.appendChild(readQuestion)
    readYes.innerHTML = 'Read'
    readToggle.appendChild(readYes)
    readNo.innerHTML = 'Unread'
    readToggle.appendChild(readNo)
    div.appendChild(thisTitle);
    div.appendChild(lineBreak)
    div.appendChild(thisAuthor)
    div.appendChild(deleteButton)
    div.appendChild(readToggle)
   
      
    // Styles to make books look like books, and add shelves inbetween rows
    if (book.read == 'yes') {
    div.style.borderBottom = "15px solid brown"
    } else if (book.read == 'no') {
      div.style.borderBottom = "15px solid white"
    }
    div.style.borderTopRightRadius = "17px"
    div.style.borderBottomRadius = "0"
    
    // Styling the books
    div.style.display = 'block';
    div.style.marginBottom = '20px';
    div.style.margin = '0'
    div.style.wordWrap = 'break-word'
    div.style.display = 'inline';
    div.style.height = '20vh'
    if (pages == 100) {
      div.style.width = "20%";
    } else if (pages == 200) {
      div.style.width = "23%";
    } else if (pages == 300) {
      div.style.width = "26%";
    } else if (pages == 400) {
      div.style.width = "29%";
    } else if (pages == 500) {
      div.style.width = "32%";
    }

  // setting accurate dropdown on books  
    if (read === "yes") {
      readToggle[0].selected = 'selected'
    readBooksContainer.appendChild(div)
    } else if (read === "no") {
      readToggle[1].selected = 'selected'
    unreadBooksContainer.appendChild(div)
    }

    
    // Changes books between arrays and containers on toggle
    function readStatusUpdate(e) {
      
      // console.log(authorText, titleText)
      if (this.parentNode.childNodes[4].value == "Read") {
        unreadBooksContainer.removeChild(this.parentNode)
        readBooksContainer.appendChild(this.parentNode)
        this.parentNode.style.borderBottom = "15px solid brown"
        let authorText = this.parentNode.childNodes[2].innerHTML.slice(3)
        let titleText = this.parentNode.childNodes[0].innerHTML
        // console.log(authorText, unreadLibrary[0].author, titleText)
        unreadLibrary.map((value, index) => {
          if ((unreadLibrary[index].author == authorText) && (unreadLibrary[index].title == titleText)) {
            readLibrary.push(unreadLibrary[index])
            unreadLibrary.splice(index, 1)
            console.log(readLibrary, unreadLibrary)
          }
        })
      } else if (this.parentNode.childNodes[4].value == "Unread") {
        readBooksContainer.removeChild(this.parentNode)
        unreadBooksContainer.appendChild(this.parentNode)
        console.log(this.parentNode)
        this.parentNode.style.borderBottom = "15px solid white"
        let authorText = this.parentNode.childNodes[2].innerHTML.slice(3)
        let titleText = this.parentNode.childNodes[0].innerHTML
        // console.log(authorText, readLibrary[0].author, titleText)
        readLibrary.map((value, index) => {
          if ((readLibrary[index].author == authorText) && (readLibrary[index].title == titleText)) {
            unreadLibrary.push(readLibrary[index])
            readLibrary.splice(index, 1)
            console.log(readLibrary, unreadLibrary)
          }
          })
      }
    }

    readToggle.addEventListener("change", readStatusUpdate)
  };
  booky();
}

// function newBookCreator() {
// div = document.createElement("div");
// bookTitle = document.createTextNode(title)
// div.appendChild(bookTitle);
// div.style.display = 'block';
// booksContainer.appendChild(div);
// }
 
  // function newTableRow() {
  //   myTBody = document.getElementsByTagName('tbody')[0];
  // for (i = myLibrary.length - 1; i < myLibrary.length; i++) {
  //   console.log(i)
  //   row = document.createElement("tr");
  //   titleCell = document.createElement('td')
  //   titleText = document.createTextNode(`${myLibrary[i].title}`)
  //   titleCell.appendChild(titleText)
  //   row.appendChild(titleCell)
  //   authorCell = document.createElement('td')
  //   authorText = document.createTextNode(`${myLibrary[i].author}`)
  //   authorCell.appendChild(authorText)
  //   row.appendChild(authorCell)
  //   pagesCell = document.createElement('td')
  //   pagesText = document.createTextNode(`${myLibrary[i].pages}`)
  //   pagesCell.appendChild(pagesText)
  //   row.appendChild(pagesCell)
  //   readCell = document.createElement('td')
  //   if (`${myLibrary[i].read}` == "yes") {
  //   readText = document.createTextNode(`${myLibrary[i].read}`)
  //   readCell.appendChild(readText)
  //   } else 
  //          if (`${myLibrary[i].read}` == 'no') {  
  //        readSelect = document.createElement('select')
  //        readYes = document.createElement('option')
  //        readYes.value = "yes"
  //        readYes.innerHTML = "Finished now"
  //        readNo = document.createElement('option')
  //        readNo.value = "no"
  //        readNo.innerHTML = "Still unfinished"
  //        readSelect.appendChild(readNo)
  //        readSelect.appendChild(readYes)
  //        readCell.appendChild(readSelect)
  //        readSelect.addEventListener('change', readSelectValue)  
  //        function readSelectValue() {
          
  //          myLibrary[i].read = 'yes'; // I need to align this 'i' with the data tag of the book.
  //          console.log(i)
  //          console.log(this) 
  //          readSelect = 'yes'
  //          console.log(readSelect.value)
  //         console.log(myLibrary[i].read)
  //         if (readSelect.value == 'yes') {
  //           readText = document.createTextNode(`${myLibrary[i].read}`)
  //           console.log(i)
  //           readCell.removeChild(readSelect)
  //           readCell.appendChild(readText)
  //         }
  //         }  
  //   }
  //   row.appendChild(readCell)
  //   deleteCell = document.createElement('td')
  //   deleteButton = document.createElement(`button`)
  //   deleteButton.type = 'button'
  //   deleteButton.innerHTML = 'Delete book'
  //   deleteButton.className = 'delete-btns'
  //   deleteCell.appendChild(deleteButton)
  //   deleteButton.onclick = function() {
  //    myTBody.removeChild(this.parentNode.parentNode);
  //    `${myLibrary[i]}`.delete;
  //    index = myLibrary.indexOf`${i}`
  //    myLibrary.splice(index, 1)
  //    console.log(myLibrary)
  //    document.getElementById('book-title').value = ' '
  //   };
  //   row.appendChild(deleteCell)
  //   myTBody.appendChild(row);
  // };


  function clearInputs() {
    document.getElementById('book-title').value = ' '
    document.getElementById('book-author').value = ' '
    // document.getElementById('book-pages').value = ' '
    // document.getElementById('read').value = 'Choose here'
  }
  clearInputs()
// };




const deleteButtons = document.querySelectorAll('.delete-btns');

deleteButtons.forEach(deleteButton => deleteButton.addEventListener('click', countMinus));




newBook.addEventListener('click', showForm)
addBook.addEventListener('click', addBookF)
// addBook.addEventListener('click', countAdd)
