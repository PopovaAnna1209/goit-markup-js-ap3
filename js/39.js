// Дополни метод removePotion(potionName) так, чтобы он удалял 
// зелье potionName из массива зелий в свойстве potions.

// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.removePotion это метод объекта
// После первого вызова метода atTheOldToad.removePotion("Dragon breath"), 
// в свойстве potions будет массив ["Speed potion", Stone skin"]
// После второго вызова метода atTheOldToad.removePotion("Speed potion"), 
// в свойстве potions будет массив ["Stone skin"]

const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    removePotion(potionName) {
    this.potions.splice(this.potions.indexOf(potionName), 1);
    },
  };

  atTheOldToad.removePotion("Dragon breath");
  console.log(atTheOldToad);

  atTheOldToad.removePotion("Speed potion");
  console.log(atTheOldToad);
