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

    const checkClock = (call) => {
      call.time <= new Date().getTime() && call.callback();
    };

    this.timerId = setInterval(() => {
      this.alarmCollection.forEach(checkClock);
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

  addClock(setTime, callback, alarmId) {
    if (!alarmId) {
      throw new Error('Будильник не добавлен! Не передан идентификатор.');
    }

    if (this.alarmCollection.find((item) => item.id === alarmId)) {
      console.error(
        `Будильник не добавлен! Будильник с id = ${alarmId} уже существует, измените значение`,
      );
      return false;
    }

    try {
      this.alarmCollection.push(new Alarm(setTime, callback, alarmId));
    } catch (err) {
      console.error(err.message);
    }
  }

  removeClock(alarmId) {
    let length = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter((item) => item.id !== alarmId);
    return length > this.alarmCollection.length;
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
  constructor(setTime, callback, alarmId) {
    let time = new Date().setHours(setTime.split(':')[0], setTime.split(':')[1], 0, 0);
    // if (time - new Date() <= 0) {
    //   throw new Error('Нельзя создать будильник на прошедшее время');
    // } else {
    //   this.time = time;
    // }
    this.time = time;
    this.callback = callback;
    this.id = alarmId;
    this._timeString = setTime;
  }
}
