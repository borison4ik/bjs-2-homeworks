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
