/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`,
метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение
 `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
    fish: 10,
  },

  addResource: function (resource, amount) {
    let currentKey
    let isEqual
    for (const key in this.resources){
      currentKey = key
      if (currentKey === resource){
        isEqual = currentKey
      }
      } if (!(isEqual === resource)){
      console.log("Invalid resource")}
      else {
        this.resources[resource] += amount
      }
    return this.resources[resource]
    },
}
game.addResource("stone", 10)
