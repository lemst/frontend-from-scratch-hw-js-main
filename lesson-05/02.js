/*
Напишите функцию `updateGallery`, которая будет обновлять информацию о произведениях искусства в виртуальной галерее. Функция должна принимать три параметра:

- объект галереи
- название произведения (ключ)
- новое значение

Если произведение с таким названием уже есть в галерее, его значение должно быть обновлено. Если произведения нет, оно должно быть добавлено в объект галерею.

Пример использования функции:

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch'
}

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506')
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali')

console.log(gallery)

Ожидаемый вывод:
{
  'Mona Lisa': 'Leonardo da Vinci, 1503-1506',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
  'The Persistence of Memory': 'Salvador Dali'
}
*/

const gallery = {
  'Mona Lisa': 'Leonardo da Vinci',
  'Starry Night': 'Vincent van Gogh',
  'The Scream': 'Edvard Munch',
}

function updateGallery(virtualGallery, artworkName, newValue) {
  for (const key in virtualGallery) {
    if (artworkName === key) {
      virtualGallery[key] = newValue
    } else {
      virtualGallery[artworkName] = newValue
    }
  }
};

// function updateGallery(virtualGallery, artworkName, newValue) {
//     let isArtwork = false

//     for (const key in virtualGallery) {
//         if (artworkName === key) {
//             virtualGallery[key] = newValue
//             isArtwork = true
//         }
//     }

//     if (isArtwork === false) {
//         virtualGallery[artworkName] = newValue
//     }
// };

updateGallery(gallery, 'Mona Lisa', 'Leonardo da Vinci, 1503-1506');
updateGallery(gallery, 'The Persistence of Memory', 'Salvador Dali');
updateGallery(gallery, 'Starry Night', 'Vincent van Gogh, 1889');
updateGallery(gallery, 'La Danse (second version)', 'Henri Matisse, 1910');

console.log(gallery);