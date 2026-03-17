/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

 // Пример использования:
// const numbers = [1, 2, 3, 4, 5]
//
// const oddNumbers = filter(numbers, (element, index) => {
//   return element % 2 !== 0
// });
//
// console.log(oddNumbers) // Должен вывести: [1, 3, 5]


const numbers = [1, 2, 3, 4, 5]

const callback = (element, index)  => {
    return element % 2 === 0
}

function filter (array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])){
            newArray.push(array[i])
        }
    }
    console.log(newArray)
    return newArray
}



filter(numbers, callback);


/////////////////////////////////////my callback training///////////////////////////////

// const numbers = [1, 2, 3, 4, 5]
//
// const caBak = ((a, b) => {
//     return a + b
// })
//
// function processArray (array, callback){
//     const newArray = []
//     for (let i = 0; i < array.length; i++) {
//         let sum = callback(array[i], 10)
//         newArray.push(sum)
//     }
//
//     console.log(newArray)
//     return newArray
// }
//
// processArray(numbers, caBak);