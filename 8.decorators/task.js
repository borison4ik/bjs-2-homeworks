function cachingDecoratorNew(func) {
  let cache = [];

  return function (...args) {
    const hash = args.join();
    const cacheItem = cache.find((item) => item.hash === hash);

    if (cacheItem) {
      return `Из кэша: ${cacheItem.result}`;
    } else {
      const result = func.call(this, ...args);
      if (cache.length == 5) {
        cache = cache.slice(1);
        cache.push({ hash, result });
      } else {
        cache.push({ hash, result });
      }
      return `Вычисляем: ${result}`;
    }
  };
}

function debounceDecoratorNew(func, ms) {
  let isDelayed = false;
  // можно сразу вернуть не именованную функцию
  return function (...args) {
    if (!isDelayed) {
      func.call(this, ...args);
      isDelayed = true;

      setTimeout(() => {
        isDelayed = false;
      }, ms);
    }
  };
}

function debounceDecorator2(func, ms) {
  let isDelayed = false;
  let count = 0;
  // здесь пришлось вернуть именованную функцию чтобы обратиться к ней по имени и создать новое свойство
  return function wrapper(...args) {
    wrapper.count = ++count;
    if (!isDelayed) {
      func.call(this, ...args);
      isDelayed = true;

      setTimeout(() => {
        isDelayed = false;
      }, ms);
    }
  };
}
