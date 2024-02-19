// lib/Library.js
class Library {
    constructor() {
        this.books = [];
    }

    addBook(title, author, price, available, genre) {
        this.books.push({ title, author, price, available, genre });
    }

    displayAvailableBooks() {
        const availableBooks = this.books.filter(book => book.available);
        console.log("\x1b[36mLivres disponibles :\x1b[0m");
        availableBooks.forEach(book => console.log(`${book.title} par ${book.author} - ${book.price}€ - Genre: ${book.genre}`));
    }

    filterBooksByPrice(maxPrice) {
        const filteredBooks = this.books.filter(book => book.available && book.price <= maxPrice);
        console.log(`\x1b[36mLivres disponibles à ${maxPrice}€ ou moins :\x1b[0m`);
        filteredBooks
            .sort((a, b) => a.price - b.price) // Trie les livres par prix croissant
            .forEach(book => console.log(`${book.title} par ${book.author} - ${book.price}€ - Genre: ${book.genre}`));
    }

    filterGenreUnderPrice(genre, maxPrice) {
        const genreBooksUnderPrice = this.books.filter(book => book.available && book.genre === genre && book.price < maxPrice);
        console.log(`\x1b[36mLivres du genre "${genre}" à lire à moins de ${maxPrice}€ :\x1b[0m`);
        genreBooksUnderPrice
            .sort((a, b) => a.price - b.price) // Trie les livres par prix croissant
            .forEach(book => console.log(`${book.title} par ${book.author} - ${book.price}€`));
    }
}

module.exports = Library;
