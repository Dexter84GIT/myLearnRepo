let writeInt = prompt('Угадай число от 1 до 100');



const isNumber = function(num) {
    return !isNaN(parseInt(num)) && isFinite(num)/* && (num > 0) */;
}

const findNumber = function(writeInt) {
    function recurcy() {
        let number = 55;
        if  (!isNumber(writeInt)) {
            writeInt = +prompt("Введи число, собака!");
         }         
         else if ((writeInt == null) || (writeInt == 0)) {
            alert("Игра окончена");
         }
         else if (writeInt > number)  {
            writeInt = +prompt(`Загаданное число меньше ${writeInt}`); 
            findNumber(writeInt);  
         } else if (writeInt < number) {
            writeInt = +prompt(`Загаданное число больше ${writeInt}`); 
            findNumber(writeInt);  
         }
         else if (writeInt == number) {
            alert("Поздравляю, Вы угадали!!!");
         }
         else {
            alert("Игра окончена")
         }
    }
    return recurcy()
}

findNumber(writeInt);
console.log(typeof writeInt, writeInt);

