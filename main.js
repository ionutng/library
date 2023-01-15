function Book(title, author, numberOfPages, status) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.status = status;
    this.info = function() {
        return `${title} by ${author}, ${numberOfPages} pages, ${status}`;
    };
}

let myLibrary = [];
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const numberOfPages = document.querySelector('#pages-number');
const bookStatus = document.querySelector('#status');    

function addBookToLibrary(title, author, numberOfPages, status) {

    const book = new Book(title, author, numberOfPages, status);
    myLibrary.push(book);
    console.log(myLibrary);
}

function displayBooks() {
    const booksDiv = document.querySelector('.books');
    booksDiv.textContent = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const bookTitle = document.createElement('p');
        bookTitle.textContent = myLibrary[i].title;
        booksDiv.appendChild(bookTitle);
        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = myLibrary[i].author;
        booksDiv.appendChild(bookAuthor);
        const numberOfPages = document.createElement('p');
        numberOfPages.textContent = myLibrary[i].numberOfPages;
        booksDiv.appendChild(numberOfPages);
        const status = document.createElement('p');
        status.textContent = myLibrary[i].status;
        booksDiv.appendChild(status);
    }

    // Display the books in a table
    // const bookTable = document.createElement('table');
    // booksDiv.appendChild(bookTable);

    // for (let i = 0; i < myLibrary.length; i++) {
    //     const bookRow = document.createElement('tr');
    //     bookTable.appendChild(bookRow);
    //     const bookTitle = document.createElement('td');
    //     bookTitle.textContent = myLibrary[i].title;
    //     bookRow.appendChild(bookTitle);
    //     const bookAuthor = document.createElement('td');
    //     bookAuthor.textContent = myLibrary[i].author;
    //     bookRow.appendChild(bookAuthor);
    //     const numberOfPages = document.createElement('td');
    //     numberOfPages.textContent = myLibrary[i].numberOfPages;
    //     bookRow.appendChild(numberOfPages);
    //     const status = document.createElement('td');
    //     status.textContent = myLibrary[i].status;
    //     bookRow.appendChild(status);
    // }
}

const form = document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary(title.value, author.value, numberOfPages.value, bookStatus.value);
    displayBooks();
});

const openPopupButton = document.querySelector('#add-book');
const closePopupButton = document.querySelector('#submit-button');
const overlay = document.querySelector('#overlay');

openPopupButton.addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    openPopup(popup);
});

closePopupButton.addEventListener('click', () => {
    const popup = document.querySelector('.popup');
    if (title.value && author.value && numberOfPages.value && bookStatus.value) {
        closePopup(popup);
    }
});

overlay.addEventListener('click', () => {
    const popups = document.querySelectorAll('.popup.active');
    popups.forEach(popup => {
        closePopup(popup);
    });
});

function openPopup(popup) {
    if (popup == null) return;
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup(popup) {
    if (popup == null) return;  
    popup.classList.remove('active');
    overlay.classList.remove('active');
}