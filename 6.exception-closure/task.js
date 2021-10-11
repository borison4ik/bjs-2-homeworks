// Задание №1

function parseCount(count) {
  count = Number.parseInt(count);

  if (Number.isNaN(count)) {
    throw new Error('Невалидное значение');
  }

  return count;
}

function validateCount(count) {
  try {
    return (count = parseCount(count));
  } catch (err) {
    return err;
  }
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

  try {
    a = parseCount(a);
    b = parseCount(b);
    c = parseCount(c);
    return (newTriangel = new Triangle(a, b, c));
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
}
