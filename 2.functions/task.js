// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  if (arr.length) {
    min = arr[0];
    max = arr[0];
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
      min = min < arr[i] ? min : arr[i];
      max = max > arr[i] ? max : arr[i];
      sum += arr[i];
    }

    avg = +(sum / arr.length).toFixed(2);
  }

  // if (arr.length) {
  //   min = Math.min(...arr);
  //   max = Math.max(...arr);
  //   avg = +(arr.reduce((acc, item) => acc + item) / arr.length).toFixed(2);
  // }

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
