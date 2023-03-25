function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages
}

let myLibrary = [];

function addBookToLibrary (title, author, pages) {
    const newBook = new Book(title, author, pages);

    myLibrary.push(newBook);
}

const cardContainer = document.querySelector('#card-container');

const formButton = document.getElementById('formButton');
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    addBookToLibrary(title, author, pages);

    const card = document.createElement('div');
    card.className = 'card';
  
    const newBook = myLibrary[myLibrary.length - 1];
    for (const property in newBook) {
        const propertyValue = document.createElement('p');
        propertyValue.textContent = `${property}: ${newBook[property]}`;
  
        card.appendChild(propertyValue);
      
    }
    
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function(){
        cardContainer.removeChild(card);
        myLibary = myLibrary.filter(book => book.title != newBook.title);
    });
    card.appendChild(deleteButton);
  
    cardContainer.appendChild(card);
    myForm.style.display = 'none';
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';

})

formButton.addEventListener('click', function() {
    myForm.style.display = 'block';
})