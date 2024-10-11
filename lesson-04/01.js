/*
Напишите функцию `includesElement`, которая принимает массив и элемент, а затем возвращает булево значение, указывающее, содержится ли данный элемент в массиве. Для перебора элементов используйте цикл `for`.

Входные данные:
- `array`: Массив, в котором нужно проверить наличие элемента. Массив может содержать любые типы данных.
- `element`: Элемент, наличие которого нужно проверить в массиве.

Выходные данные:
- `true`: Если элемент найден в массиве.
- `false`: Если элемент отсутствует в массиве.

Пример использования:
includesElement([1, 2, 3], 2)  // должен вернуть `true`.
*/

function includesElement(array, element) {
    let isElement

    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
            isElement = true
            break
        } else {
            isElement = false
        }
    }

    return isElement
};

console.log(includesElement([1, 2, 3], 2));
console.log(includesElement([1, 2, 3], 5));
console.log(includesElement(['Dog', 'Cat', 'Frog'], 'Cat'));
console.log(includesElement(['Dog', 'Cat', 'Frog'], 'Parrot'));