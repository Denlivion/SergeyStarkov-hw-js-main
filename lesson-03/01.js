// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое
function calculateAverage(num1, num2) {
    if ((num1 > 0) && (num2 > 0))
    {
      let validateNum =  (num1 + num2)/2;
      console.log(validateNum)
    } else {
        console.log('Пожалуйста, введи два произвольных числа, выше нуля!')
    }
}

calculateAverage(2, 20)