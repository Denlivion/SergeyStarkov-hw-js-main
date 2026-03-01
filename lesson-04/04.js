/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку,
 где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/
// let stringArray
// let doubledString



function doubleEachCharacter(someString) {
    let doubledString = '';
    for (let i = 0; i < someString.length; i++){
        doubledString+=(someString[i]);
        doubledString+=(someString[i]);

    }

    console.log(doubledString)
    return doubledString


    // let permanentArray = [];
    // stringArray = someString.split('');
    // for (let i = 0; i < stringArray.length; i++){
    //     permanentArray.push(stringArray[i])
    //     permanentArray.push(stringArray[i])
    //     doubledString = permanentArray.join('')
    // }
    //
    // console.log(doubledString)
    // return doubledString
}

doubleEachCharacter('hello')
