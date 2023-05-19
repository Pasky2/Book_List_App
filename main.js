const bookList = document.querySelector('#book-list ul');

// Add Books
const addBooksForm = document.forms['add-book'];
addBooksForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = document.querySelector('#add-book input[type="text"]').value;

    // Create li element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    bookName.classList.add('name');
    bookName.textContent = value;
    li.appendChild(bookName);
    
    // Create delete button
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'delete';
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', (e) => {
        e.target.btn;
    });

    // Add li to list
    bookList.appendChild(li);


});

// Delete books
deleteBtn = document.querySelectorAll('#book-list ul li .delete');
deleteBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const li = e.target.parentElement;
        bookList.removeChild(li);
    })
});

// Hide book list
const hideBookList = document.querySelector('#book-list #hideBooks');
hideBookList.addEventListener('change', function(e){
    if (hideBookList.checked) {
        bookList.style.display = "none";
    } else {
        bookList.style.display = "initial";
    }
});

// Search for books
const searchBar = document.querySelector('#search-books input');

searchBar.addEventListener('keyup', (e) => {
const searchBarItem = e.target.value.toLowerCase();
const bookListItems = document.querySelectorAll('#book-list ul li');

bookListItems.forEach(item => {
    const itemText = item.textContent.toLowerCase();
    if (itemText.includes(searchBarItem)) {
        item.style.display = "block";
    } else {
        item.style.display = "none";
    }
})
});