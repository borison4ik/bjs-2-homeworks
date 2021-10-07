// Задание №1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state * 1.5;
  }

  set state(newState) {
    this._state = newState <= 0 ? 0 : newState >= 100 ? 100 : newState;
  }

  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(...args) {
    super(...args);
    this.type = 'magazine';
  }
}
class Book extends PrintEditionItem {
  constructor(author, ...args) {
    super(...args);
    this.type = 'book';
    this.author = author;
  }
}
class NovelBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'novel';
  }
}
class FantasticBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'fantastic';
  }
}
class DetectiveBook extends Book {
  constructor(...args) {
    super(...args);
    this.type = 'detective';
  }
}

// Задание №2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    book.state > 30 && this.books.push(book);
  }

  findBookBy(type, value) {
    return this.books.find((item) => item[type] === value) || null;
  }

  giveBookByName(bookName) {
    let bookIndex = this.books.findIndex((item) => item.name === bookName);
    return bookIndex < 0 ? null : this.books.splice(bookIndex, 1)[0];
  }
}
