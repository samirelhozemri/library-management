Description :
- Le projet de gestion de bibliothèque fournit une classe JavaScript nommée Library permettant de gérer une collection de livres.
- Cette classe offre des fonctionnalités telles que l'ajout de livres, l'affichage des livres disponibles, le filtrage des livres par prix et le filtrage des livres par genre et prix.


Fonctionnalités :
- Ajout de Livres : La méthode addBook(title, author, price, available, genre) permet d'ajouter un nouveau livre à la collection de la bibliothèque, en spécifiant le titre, l'auteur, le prix, la disponibilité et le genre du livre.

- Affichage des Livres Disponibles : La méthode displayAvailableBooks() affiche la liste des livres disponibles dans la collection, en incluant le titre, l'auteur, le prix et le genre de chaque livre.

- Filtrage des Livres par Prix : La méthode filterBooksByPrice(maxPrice) filtre et affiche les livres disponibles dont le prix est inférieur ou égal à une valeur maximale spécifiée.

- Filtrage des Livres par Genre et Prix : La méthode filterGenreUnderPrice(genre, maxPrice) filtre et affiche les livres disponibles d'un genre spécifique et dont le prix est inférieur à une valeur maximale spécifiée.
  

Utilisation :
- Pour utiliser la classe Library dans votre application JavaScript, vous devez l'importer comme suit :


const Library = require('./lib/Library');

// Création d'une instance de la bibliothèque
const myLibrary = new Library();

// Exemples d'utilisation des méthodes de la bibliothèque
myLibrary.addBook("Le Seigneur des Anneaux", "J.R.R. Tolkien", 20, true, "Fantasy");
myLibrary.addBook("Harry Potter à l'école des sorciers", "J.K. Rowling", 15, true, "Fantasy");
myLibrary.addBook("1984", "George Orwell", 12, true, "Science Fiction");

myLibrary.displayAvailableBooks();
myLibrary.filterBooksByPrice(15);
myLibrary.filterGenreUnderPrice("Fantasy", 20);
