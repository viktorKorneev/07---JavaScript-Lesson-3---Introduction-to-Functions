// Объявляем глобальную переменную для хранения золота
let gold = 100;

// Попытка построить бошню
let buildingName = "Tower";
let costGold = 30;

// проверяем, хватает ли нам золота для стрительсва
// if (gold >= costGold) {
//   // вычитаем золото
//   gold -= costGold; // то же, что gold = gold - costGold
//   console.log(`${buildingName}: work complete!`);
// } else {
//   console.log(`${buildingName}: not enough resources!`);
// }

// Попытка построить кузницу
buildingName = "Blacksmith";
costGold = 140;

function createBulding(buildingName, costGold) {
  const hasEnoughGold = gold >= costGold;

  if (hasEnoughGold) {
    gold -= costGold;
    console.log(`${buildingName}: work complete!`);
  } else {
    console.log(`${buildingName}: not enough resources!`);
  }
}
createBulding("Tower", 30); // Строим башню золота хватает
createBulding("Blacksmith", 140); // Строить кузницу, золота не хватает

// Функция для увеличения ресурсов
function increaseResource(currentAmount, increment = 10) {
  // Создаем локальную переменную для нового количества ресурсов
    const newAmount = currentAmount + increment;
  return newAmount;
  
}
// Она недоступна за пределами функции
console.log(newAmount) // ReferenceError: newAmount is not defined

// Вызов функции без второго параметра
gold = increaseResource(gold);
console.log(`New amount of gold: ${gold}`);

// Вызов функции с параметром
gold = increaseResource(gold, 100);
console.log(`New amount of gold: ${gold}`);
