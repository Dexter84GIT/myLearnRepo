'use strict'

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 15;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && (num > 0);
}


const asking = function() {
    title = prompt('Как называется ваш проект?', "Калькулятор вёрстки")
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, сложные, адаптивные");
    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?');
    }
    while ((!isNumber(screenPrice) && (isNumber(screenPrice) !== null)))
    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function() {
    let sum = 0;
    let price;

  for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', 'Метрика');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Попап');
        }

        do {
            price = prompt("Сколько это будет стоить?");
        }
        while ((!isNumber(price)))

        sum += +price;
}
    return sum;
};


function getFullPrice() {
    return +screenPrice + +allServicePrices;
}


let getTitle = function() {
    let clearTitle = title.trimStart()
    let firstLetter = clearTitle.charAt(0);
    let secondLetter = clearTitle.slice(1);
    let fullLetter = firstLetter.toUpperCase() + secondLetter.toLowerCase();
    return fullLetter;
}

let getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback/100))
}
const getRollBackMessage = function(price) {
     if (price >= 30000){
        return 'Даем скидку в 10%';
     } else if (15000 <= price && price < 30000) {
         return 'Даем скидку в 5%';
     } else if (0 <= price && price < 15000) {
         return 'Скидка не предусмотрена';
     } else {
         return 'Что то пошло не так'
     }
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(allServicePrices);
showTypeOf(fullPrice);
showTypeOf(adaptive);
console.log(getRollBackMessage(fullPrice));
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(title)
console.log('allServicePrices', allServicePrices)
console.log(servicePercentPrice);
console.log(fullPrice);


