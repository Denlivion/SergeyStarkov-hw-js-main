// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

function isEven(randomNum) {
    let evenNum = (randomNum % 2 === 0)?true:false;
    console.log(evenNum);
    return (evenNum)
}
isEven(0)
