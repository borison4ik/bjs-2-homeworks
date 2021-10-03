function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
  return this.marks.length;
};

Student.prototype.addMarks = function (...numbers) {
  if (this.marks === undefined) {
    this.marks = [...numbers];
  } else {
    this.marks.push(...numbers);
  }
  return this.marks.length;
};

Student.prototype.getAverage = function () {
  if (this.marks.length) {
    return this.marks.reduce((acc, item) => (acc += item)) / this.marks.length;
  }
  return false;
};

Student.prototype.exclude = function (reason) {
  if (this.marks) {
    delete this.marks;
  }

  if (this.subject) {
    delete this.subject;
  }

  if (this.excluded === undefined) {
    this.excluded = reason;
    return true;
  }

  return false;
};

// ваш код для остальных методов
