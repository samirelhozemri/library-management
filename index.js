// index.js
const Library = require('./Library');

const library = new Library();
library.addBook("Le Seigneur des Anneaux", "J.R.R. Tolkien", 25, true, "Fantasy");
library.addBook("Harry Potter à l'école des sorciers", "J.K. Rowling", 41, true, "Fantasy");
library.addBook("1984", "George Orwell", 18, false, "Dystopie");
library.addBook("Le Petit Prince", "Antoine de Saint-Exupéry", 39, true, "Aventure");
library.addBook("Orgueil et Préjugés", "Jane Austen", 25, true, "Romance");
library.addBook("Les Misérables", "Victor Hugo", 53, true, "Classique");
library.addBook("Le Hobbit", "J.R.R. Tolkien", 33, false, "Fantasy");
library.addBook("Don Quichotte", "Miguel de Cervantes", 24, true, "Classique");
library.addBook("Anna Karénine", "Léon Tolstoï", 38, true, "Roman");
library.addBook("Le Comte de Monte-Cristo", "Alexandre Dumas", 45, true, "Aventure");

library.displayAvailableBooks();
console.log("\n");
library.filterBooksByPrice(40);
console.log("\n");
library.filterGenreUnderPrice("Fantasy", 42);
