// Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял 
// название зелья с oldName на newName, в массиве зелий в свойстве potions.

// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.potions это массив ["Speed potion", "Dragon breath", "Stone skin"]
// Значение свойства atTheOldToad.updatePotionName это метод объекта
// После первого вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), 
// в свойстве potions будет массив ["Speed potion", "Polymorth", "Stone skin"]
// После второго вызова метода atTheOldToad.updatePotionName("Stone skin", "Invisibility"), 
// в свойстве potions будет массив ["Speed potion", "Polymorth", "Invisibility"]

const atTheOldToad = {
    potions: ["Speed potion", "Dragon breath", "Stone skin"],
    updatePotionName(oldName, newName) {
      this.potions.splice(this.potions.indexOf(oldName), 1, newName);
    },
  };

  atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
  console.log(atTheOldToad);

  atTheOldToad.updatePotionName("Stone skin", "Invisibility");
  console.log(atTheOldToad);