/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив,
содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно,
она доступна по всему проекту за счёт hoisting.
*/
const someArray = [1, 2, 3, 2, 1, 4]

function findUniqueElements(array) {
    debugger
    let uniqueElementsArray = [];
    let elementToSearch
    for (let i = 0; i < array.length; i++){
            elementToSearch = array[i];
        if (!(includesElement(uniqueElementsArray, elementToSearch))) {
            uniqueElementsArray.push(elementToSearch)
        }

        console.log(uniqueElementsArray)
    }

    return uniqueElementsArray
}
findUniqueElements(someArray)

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