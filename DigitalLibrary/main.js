let books = [];
function Book(title,author){
    this.title = title;
    this.author = author;
}

let addBookButton = document.getElementById("add-book")
addBookButton.addEventListener('click', function(){
let title = document.getElementById("book-title").value
let author = document.getElementById("book-author").value

if(title && author){
    let newBook = new Book(title,author)
        books.push(newBook)
    
    displayBooks()
    ;
   
}
})

function displayBooks(){
    let libraryContainer = document.getElementById("library-container");
    libraryContainer.innerHTML = ""
    for(let i= 0; i<books.length; i++){
        libraryContainer.innerHTML +=`
            <div class="book">
                <h2>${books[i].title}</h2>
                <p>${books[i].author}</p>
            </div>
        `;
    }
    }

    let searchButton = document.getElementById("search-book")
    searchButton.addEventListener('click', function(){
        let searchTerm = document.getElementById("search-term").value
        let searchResult = document.getElementById('search-results')
        let filteredBooks= filterBook(books,searchTerm)
        searchResult.innerHTML = '';

        for (let i = 0; i < filteredBooks.length; i++) {
            searchResult.innerHTML += `
                <div class="book">
                    <h2>${filteredBooks[i].title}</h2>
                    <p>${filteredBooks[i].author}</p>
                </div>
            `;
        }
    });
    
