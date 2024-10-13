/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findUniqueElements(array) {
    let result = []

    result.push(array[0])
    for (let i = 0; i < array.length; i++) {
        let isElement = includesElement(result, array[i])
        if (isElement === false) {
            result.push(array[i])
        }
    }

    return array.length === 0 ? result = [] : result
};

console.log(findUniqueElements([2, 2, 2, 2, 2, 2, 5, 3, 4, 5, 8, 7, 7, 8]));
console.log(findUniqueElements([1, 1, 1, 1, 1, 1, 1, 1]));
console.log(findUniqueElements([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(findUniqueElements([]));