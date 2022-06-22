// task 02
const rain = Math.random();
const x = Math.round(rain);
if (x === 1) {
  console.log('Пошёл дождь. Возьмите зонт!');
} else {
  console.log('Дождя нет!');
}

// task 03
const mathematics = +prompt('Введите кол-во баллов по математике', '');
const rus = +prompt('Введите кол-во баллов по русскому языку', '');
const informatics = +prompt('Введите кол-во баллов по информатике', '');
const sum = mathematics + rus + informatics;
if (sum >= 265) {
  alert('Поздравляю, вы поступили на бюджет!')
} else {
  alert('Сорри, но нет...')
}

// task 04
const mon = +prompt('Сколько денег вы хотите снять?', '');
if (mon % 100 === 0) {
  alert('Ок, деньги есть!')
} else {
  alert('Сорри, тут только куюры наменалом 100 рублей')
}
