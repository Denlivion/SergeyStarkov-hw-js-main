/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив,
содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее.
Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

const someArray1 = [0, 2, 43, 54, 5, 81, 9, 21, 32]
const someArray2 = [22, 3, 2, 3, 8, 1, 4, 7, 15, 33]


function findCommonElements(array1, array2) {

    let commonElementsArray = [];

    for (let i = 0; i < array1.length; i++){
        let elementToCompare = array1[i];
        if((includesElement(array1, elementToCompare)) === (includesElement(array2, elementToCompare))){
            commonElementsArray.push(elementToCompare)
        }
    }
    console.log(commonElementsArray)
    return commonElementsArray
}

findCommonElements(someArray1, someArray2)

function includesElement(array, element) {
    let isInArray = false
    for (let i = 0; i < array.length; i++) {
        let argument = array[i];
        if (argument === element) {
            isInArray = true
            console.log(argument)
        }
    }
    return isInArray
}