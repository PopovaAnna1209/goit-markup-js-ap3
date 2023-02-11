// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, 
// а в будущем может быть и другими характеристиками. 
// Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions, но только если такого зелья еще нет в инвентаре. 
// В противном случае возвращается строка.
// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.

// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.getPotions это метод объекта
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает 
// [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]
// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), 
// в массиве potions последним элементом будет этот объект
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Power potion", price: 270 }), 
// в массиве potions последним элементом будет этот объект
// Если добавляемое зелье уже есть в массиве potions, метод addPotion возвращает строку с текстом из исходного кода
// Если добавляемое зелье уже есть в массиве potions, метод addPotion не добавляет в него передаваемый обьект
// Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), массив potions не изменяется
// Для исходного объекта после вызова atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив potions не изменяется
// Для исходного объекта вызов atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), 
// возвращает строку "Error! Potion Dragon breath is already in your inventory!"
// Для исходного объекта вызов atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), 
// возвращает строку "Error! Potion Stone skin is already in your inventory!"
// Значение свойства atTheOldToad.removePotion это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), 
// в свойстве potions будет массив [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), 
// в свойстве potions будет массив [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значение свойства atTheOldToad.updatePotionName это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), 
// в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), 
// в свойстве potions будет массив [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    getPotions() {
      return this.potions;
    },
    addPotion(newPotion) {
        for (const potion of this.potions) { 

        if (potion.name === newPotion.name) {
        return `Error! Potion ${ newPotion.name } is already in your inventory!`;
      }
    }
      this.potions.push(newPotion);
    },
    removePotion(potionName) {
      for (let i = 0; i < this.potions.length; i += 1) {

      if (potionName === this.potions[i].name) {
        this.potions.splice(i, 1 );
      }
            
      if (this.potions[i] === -1) {
        return `Potion ${potionName} is not in inventory!`;
      }
    }
      
    },
    updatePotionName(oldName, newName) {
        for (const potion of this.potions) {
            if (potion.name === oldName) {
                potion.name = newName;
              }
        }

    return `Potion ${oldName} is not in inventory!`;
    },
  };
//   console.log(atTheOldToad.getPotions());
//   atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
//   console.log(atTheOldToad.getPotions());
//   atTheOldToad.addPotion({ name: "Power potion", price: 270 });
//   console.log(atTheOldToad.getPotions());
//   atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
//   console.log(atTheOldToad.getPotions());
//   atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
//   console.log(atTheOldToad.getPotions());
//   atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
//   console.log(atTheOldToad.getPotions());
//   atTheOldToad.removePotion("Dragon breath");
//   console.log(atTheOldToad.getPotions());
//   atTheOldToad.removePotion("Speed potion");
//   console.log(atTheOldToad.getPotions());
//   atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
//   console.log(atTheOldToad.getPotions());
//   atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
//   console.log(atTheOldToad.getPotions());