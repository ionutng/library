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

function addBookToLibrary(title, author, numberOfPages, status) {

    const book = new Book(title, author, numberOfPages, status);
    myLibrary.push(book);
    console.log(myLibrary);
}

const form = document.querySelector('form').addEventListener('submit', (e) => {
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const numberOfPages = document.querySelector('#pages-number');
    const bookStatus = document.querySelector('#status');
    const addBookBtn = document.querySelector('button');
    
    e.preventDefault();
    addBookToLibrary(title.value, author.value, numberOfPages.value, bookStatus.value);
});