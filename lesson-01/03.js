/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
const NUM = 20;
let step = 1;
const POINT = 1;
const TWO = 2;
let change = 1;
const ZERO = 0;


while (step<=NUM) { //TRUE
    change = step % TWO;
    if (change===POINT) {//TRUE
        sum = sum + step;
    }
    else {
        sum = sum + ZERO;
    }
    step = step + POINT;
}
console.log("Сумма всех нечётных чисел от " + POINT + " до " + NUM + " = " + sum)