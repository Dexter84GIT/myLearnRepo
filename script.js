'use strict'

let title// = prompt('Как называется ваш проект?', "Калькулятор вёрстки");
let screens// = prompt('Какие типы экранов нужно разработать?', "Простые, сложные, адаптивные");
let screenPrice// = +prompt('Сколько будет стоить данная работа?', 150000);
let adaptive// = confirm('Нужен ли адаптив на сайте?');

let rollback = 15;
let allServicePrices;
let fullPrice;
let servicePercentPrice = fullPrice * (rollback/100);
let service1;
let service2;

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const isNumber = function(num) {
    return !isNaN(parseFloat(num) && isFinite(num));
}

const asking = function() {

            title = prompt('Как называется ваш проект?', "Калькулятор вёрстки");

            screens = prompt('Какие типы экранов нужно разработать?', "Простые, сложные, адаптивные");

            screenPrice = prompt('Сколько будет стоить данная работа?');
            while (!isNumber(screenPrice)) {
                screenPrice = prompt('Сколько будет стоить данная работа?');
            }

            adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function() {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }
        sum += +prompt('Сколько это будет стоить?')
    }
    return sum;
}

function getFullPrice() {
    return screenPrice + allServicePrices;
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
showTypeOf(adaptive);
console.log(getRollBackMessage(fullPrice));
console.log(screens);
console.log(screenPrice);
console.log(adaptive);
console.log(title)
console.log('allServicePrices', allServicePrices)
console.log(servicePercentPrice);

