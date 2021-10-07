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

// Задание №3
class Student {
  constructor(name = 'noName', gender = 'male', age = 18) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.ratingJournal = [];
  }

  addMark(rating, subjectName) {
    let findObj = this.ratingJournal.find((item) => item.subject === subjectName);
    rating = parseInt(rating, 10);

    if (isNaN(rating) || rating < 1 || rating > 5) {
      throw new Error('Ошибка, оценка должна быть числом от 1 до 5');
    }

    if (!this.ratingJournal.length || !findObj) {
      this.ratingJournal.push({ marks: [rating], subject: subjectName });
    } else if (findObj) {
      findObj.marks.push(rating);
    }
    return true;
  }

  addMarks(ratings, subjectName) {
    let findObj = this.ratingJournal.find((item) => item.subject === subjectName);
    let isValid =
      Array.isArray(ratings) &&
      !ratings.find((item) => isNaN(parseInt(item)) || item < 1 || item > 5);

    if (!isValid) {
      throw new Error('Ошибка, оценки в массиве должны быть числом от 1 до 5');
    }

    if (!this.ratingJournal.length || !findObj) {
      this.ratingJournal.push({ marks: [...ratings], subject: subjectName });
    } else if (findObj) {
      findObj.marks.push(...ratings);
    }
    return true;
  }

  getAverageBySubject(subjectName) {
    let findObj = this.ratingJournal.find((item) => item.subject === subjectName);
    if (!findObj) {
      throw new Error(`Несуществующий предмет ${subjectName}`);
    }
    return findObj.marks.reduce((acc, item) => (acc += item)) / findObj.marks.length;
  }

  getAverage() {
    if (!this.ratingJournal.length) {
      throw new Error('Вы еще не изучаете ни один предмет');
    }
    return (
      this.ratingJournal.reduce((acc, item) => {
        return (acc += this.getAverageBySubject(item.subject));
      }, 0) / this.ratingJournal.length
    );
  }

  exclude(reason) {
    if (!this._exclude) {
      throw new Error(`Студент уже отчислен. Причина ${this._exclude}`);
    }
    this._exclude = reason;
    return true;
  }
}
