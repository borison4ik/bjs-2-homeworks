class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  start() {
    if (this.timerId) {
      console.warn('Таймер уже запущен');
      return true;
    }

    this.timerId = setInterval(() => {
      this.alarmCollection
        .filter((item) => item.time <= new Date().getTime())
        .forEach((item) => item && item.callback());
    }, 1000);
    console.log('Запуск таймера');
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      console.log('Таймер остановлен');
      return true;
    }
  }

  printAlarms() {
    console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`);
    this.alarmCollection.forEach((item) =>
      console.log(`Будильник №${item.id} заведен на ${item._timeString}`),
    );
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

  addClock(setHours, callback, alarmId) {
    if (!alarmId) {
      throw new Error('Звонок не добавлен! Не передан идентификатор создаваемого звонка.');
    }

    if (this.alarmCollection.find((item) => item.id === alarmId)) {
      console.error(
        `Звонок не добавлен! Звонок с id = ${alarmId} уже существует, измените значение`,
      );
      return false;
    }

    try {
      this.alarmCollection.push(new Alarm(setHours, callback, alarmId));
    } catch (err) {
      console.error(err.message);
    }
  }

  removeClock(alarmId) {
    let length = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((item) => item.id !== alarmId);
    return length > this.alarmCollection;
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours =
      currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    const minutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : `${currentDate.getMinutes()}`;
    return `${hours}:${minutes}`;
  }
}

class Alarm {
  constructor(setHours, callback, alarmId) {
    let time = new Date().setHours(setHours.split(':')[0], setHours.split(':')[1], 0, 0);
    // if (time - new Date() <= 0) {
    //   throw new Error('нельзя создать будильник на прошедшее время');
    // } else {
    //   this.time = time;
    // }
    this.time = time;
    this.callback = callback;
    this.id = alarmId;
    this._timeString = setHours;
  }
}
