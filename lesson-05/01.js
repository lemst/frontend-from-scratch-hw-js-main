/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    resource = resource.toLowerCase()
    const resources = game.resources
    let isResource = false
    for (const key in resources) {
      if (resource === key) {
        resources[key] += amount
        isResource = true
      }
    }
    if (isResource === false) {
      console.log('Invalid resource')
    }
  }
};

// game.addResource('gold', 50);
// console.log(game.resources.gold);

// game.addResource('gold', 100);
// console.log(game.resources.gold);

// game.addResource('lumber', 100);
// console.log(game.resources.lumber);

// game.addResource('iron', 50);