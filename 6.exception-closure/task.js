// Задание №1

function parseCount(count) {
  count = Number.parseInt(count);
  let err = 'Невалидное значение';

  if (Number.isNaN(count)) {
    throw new Error(err);
  }

  return count;
}

function validateCount(count) {
  try {
    count = parseCount(count);
  } catch (err) {
    return err;
  }

  return count;
}

// Задание №2

class Triangle {
  constructor(a, b, c) {
    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const p = this.getPerimeter() / 2;

    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  let newTriangel = null;

  // не работает так как функция validateCount по условию задачи возвращает ошибку вместо проброса
  // как быть?
  // try {
  //   a = validateCount(a);
  //   b = validateCount(b);
  //   c = validateCount(c);
  // } catch (err) {
  //   return err;
  // }

  try {
    newTriangel = new Triangle(a, b, c);
  } catch (err) {
    return {
      getPerimeter() {
        return 'Ошибка! Треугольник не существует';
      },

      getArea() {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }

  return newTriangel;
}
