// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать 
// просто строки по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. 
// Возвращает строку "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. 
// Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя>
// это значения параметров oldName и newName соотвественно.

// Объявлена переменная bookShelf
// Значение переменной bookShelf это объект
// Значение свойства bookShelf.getBooks это метод объекта
// Вызов метода bookShelf.getBooks() возвращает строку "Returning all books"
// Значение свойства bookShelf.addBook это метод объекта
// Вызов метода bookShelf.addBook("Haze") возвращает строку "Adding book Haze"
// Значение свойства bookShelf.removeBook это метод объекта
// Вызов метода bookShelf.removeBook("Red sunset") возвращает строку "Deleting book Red sunset"
// Значение свойства bookShelf.updateBook это метод объекта
// Вызов метода bookShelf.updateBook("Sands of dune", "Dune") возвращает строку "Updating book Sands of dune to Dune"

const bookShelf = {
    books: ["The last kingdom", "The guardian of dreams"],
    getBooks() {
      return "Returning all books";
    },
    addBook(bookName) {
      return `Adding book ${bookName}`;
    },
    removeBook(bookName) {
        return `Deleting book ${bookName}`;
    },
    updateBook(oldName, newName) {
        return `Updating book ${oldName} to ${newName}`;
    },
  };

  console.log(bookShelf);