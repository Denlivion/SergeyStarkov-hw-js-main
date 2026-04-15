/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет,
 *  представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */
let str = "12.3"
function isNumeric(str) {
    let result= Number(str) ? true : false;
    return result
}
isNumeric(str)
// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
