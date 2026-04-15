/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так,
   чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript",
   функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for.
   Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/
const str = "hello world from javascript";
function capitalizeWords(string) {
    const finalArray = [];
    let stringsArray = string.split(' ');
    let iterateArrayElements = function (array) {
        let arrayFromString
        for (let i = 0; i < array.length; i++) {
            arrayFromString = array[i].split('')
            let firstLetter
            if(arrayFromString[0]){
                firstLetter = arrayFromString[0].toUpperCase()
                let modify = [...arrayFromString, arrayFromString[0] = firstLetter]
                let newUpperCaseItem = arrayFromString.join('')
                finalArray.push(newUpperCaseItem)
            }
        }
        return  console.log(finalArray.join(' '))
    }
    return iterateArrayElements(stringsArray)
}

capitalizeWords(str)