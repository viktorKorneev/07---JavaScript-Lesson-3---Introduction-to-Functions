// Объявляем глобальную переменную для хранения золота
let gold = 100

// Попытка построить бошню
let buildingName = "Tower"
let costGold = 30

// проверяем, хватает ли нам золота для стрительсва
if (gold >= costGold) {
    // вычитаем золото
    gold -= costGold // то же, что gold = gold - costGold
    console.log(`${buildingName}: work complete!`);
} else {
    console.log(`${buildingName}: not enough resources!`);
}