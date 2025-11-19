// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code//
const PEAK = 20;
const STEP = 1;
let sum = 0;
let pre = 1;

while (pre <= 20) {
    sum = sum + pre;
    pre = pre + STEP;
}

console.log("сумма чисел от " + STEP + " до " + PEAK + " = " + sum);