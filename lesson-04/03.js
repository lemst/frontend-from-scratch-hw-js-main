/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(array1, array2) {
    const result = []

    for (let i = 0; i < array1.length; i++) {
        let isElement = includesElement(array2, array1[i])
        if (isElement === true) {
            result.push(array1[i])
        }
    }

    return result
};

console.log(findCommonElements([1, 2, 3], [2, 3, 4]));
console.log(findCommonElements([1, 2, 3], [4, 5, 6]));
console.log(findCommonElements(['Frog', 'Cat', 'Dog', 'Rabbit'], ['Cat', 'Frog', 'Parrot', 'Dog']));