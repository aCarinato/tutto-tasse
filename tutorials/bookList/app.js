// Book Class: represents a book

class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

// UI Class: handles 

class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'ale1',
                isbn: '123'
            },
            {
                title: 'Book two',
                author: 'ale2',
                isbn: '456'
            }
        ]

        const books = StoredBooks

        books.forEach((book) => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.querySelector('#book-list')

        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `

        list.appendChild(row)
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove()
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(div, form)

        // remove it after 3 sec
        setTimeout(() => document.querySelector('.alert').remove(), 1000)

    }

    static clearFields() {
        document.querySelector('#title').value= ''
        document.querySelector('#author').value = ''
        document.querySelector('#isbn').value = ''
    }

}

// EVENT: Display books
document.addEventListener('DOMContentLoaded', UI.displayBooks())

// EVENT: Add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault()

    const title = document.querySelector('#title').value
    const author = document.querySelector('#author').value
    const isbn = document.querySelector('#isbn').value

    if (title === '' || author === '' || isbn === '') {
        UI.showAlert('enter all info pd!!', 'danger')
    } else {
        const book = new Book(title, author, isbn)

        UI.addBookToList(book)

        UI.showAlert('book added!', 'success')
    
        UI.clearFields()
    }
})

// EVENT: Remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target)
})
