const addThree = (a, b, c) => a + b + c;
const upgradedAddThree = cachingDecoratorNew(addThree);
upgradedAddThree(1, 2, 3);
upgradedAddThree(1, 2, 3);
upgradedAddThree(2, 2, 3);
upgradedAddThree(3, 2, 3);
upgradedAddThree(4, 2, 3);
upgradedAddThree(5, 2, 3);
upgradedAddThree(6, 2, 3);
upgradedAddThree(1, 2, 3);

const sendSignal = () =>
  console.log(
    `Сигнал послан в ${new Date().getMinutes()} : ${new Date().getSeconds()} : ${new Date().getMilliseconds()}`,
  );

const obj = {
  text: 'obj text',
  sendSignal() {
    return console.log(`Сигнал c this ${this.text} отправлен в ${new Date().getMilliseconds()}`);
  },
};
// const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
// setTimeout(upgradedSendSignal);
// setTimeout(() => {
//   console.error('посылаю сигнал через 300мс');
//   upgradedSendSignal();
// }, 300);
// setTimeout(() => {
//   console.error('посылаю сигнал через 900мс');
//   upgradedSendSignal();
// }, 900);
// setTimeout(() => {
//   console.error('посылаю сигнал через 1200мс');
//   upgradedSendSignal();
// }, 1200);
// setTimeout(() => {
//   console.error('посылаю сигнал через 2300мс');
//   upgradedSendSignal();
// }, 2300);
// setTimeout(() => {
//   console.log('посылаю сигнал через 4400мс');
//   upgradedSendSignal();
// }, 4400);
// setTimeout(() => {
//   console.error('посылаю сигнал через 4500мс');
//   upgradedSendSignal();
// }, 4500);

// =============================================================================

const upgradedSendSignal2 = debounceDecorator2(obj.sendSignal, 2000);
setTimeout(() => upgradedSendSignal2.call(obj));
setTimeout(() => {
  console.error('посылаю сигнал через 300мс');
  upgradedSendSignal2.call(obj);
}, 300);
setTimeout(() => {
  console.error('посылаю сигнал через 900мс');
  upgradedSendSignal2.call(obj);
}, 900);
setTimeout(() => {
  console.error('посылаю сигнал через 1200мс');
  upgradedSendSignal2.call(obj);
}, 1200);
setTimeout(() => {
  console.error('посылаю сигнал через 2300мс');
  upgradedSendSignal2.call(obj);
}, 2300);
setTimeout(() => {
  console.log('посылаю сигнал через 4400мс');
  upgradedSendSignal2.call(obj);
}, 4400);
setTimeout(() => {
  console.error('посылаю сигнал через 4500мс');
  upgradedSendSignal2.call(obj);
}, 4500);
