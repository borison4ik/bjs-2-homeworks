// тут вы можете вызывать функции из task.js

const phoneClock = new AlarmClock();

const time1 = new Date().toLocaleTimeString().split(':').splice(0, 2).join(':');
console.log('time1', time1);
const time2 = new Date(new Date().setMinutes(new Date().getMinutes() + 1))
  .toLocaleTimeString()
  .split(':')
  .splice(0, 2)
  .join(':');
console.log('time1', time1);
const time3 = new Date(new Date().setMinutes(new Date().getMinutes() + 2))
  .toLocaleTimeString()
  .split(':')
  .splice(0, 2)
  .join(':');
console.log('time3', time3);

phoneClock.addClock(time1, () => console.log(`Время ${time1} Звонит будильник 1`), 1);

phoneClock.addClock(
  time2,
  () => {
    console.log(`Время ${time2} Звонит будильник 2`);
    console.log('будильник 2 удален: ', phoneClock.removeClock(2));
  },
  2,
);

phoneClock.printAlarms();

phoneClock.addClock(
  time3,
  () => {
    console.log(`Время ${time3} Звонит будильник 3`);
    phoneClock.clearAlarms();
    phoneClock.printAlarms();
  },
  3,
);

try {
  phoneClock.addClock('22:00', () => console.log('будильник 4'));
} catch (err) {
  console.error(err.message);
}

phoneClock.addClock(time1, () => console.log('будильник 5'), 1);

console.log(phoneClock);
console.log(phoneClock.getCurrentFormattedTime());

phoneClock.printAlarms();

phoneClock.start();

phoneClock.start();
