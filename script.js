'use strict'

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let rollback = 15;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let allServicePrices;
let fullPrice;
let servicePercentPrice = fullPrice * (rollback/100);

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
}
getAllServicePrices();

allServicePrices = getAllServicePrices();

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

function getFullPrice() {
    return screenPrice + allServicePrices;
}
fullPrice = getFullPrice();

let getTitle = function() {
    let clearTitle = title.trimStart()
    let firstLetter = clearTitle.charAt(0);
    let secondLetter = clearTitle.slice(1);
    let fullLetter = firstLetter.toUpperCase() + secondLetter.toLowerCase();
    return fullLetter;
}
title = getTitle();

let getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback/100))
}
servicePercentPrice = getServicePercentPrices();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);
console.log(getRollBackMessage(fullPrice));
console.log(screens);
console.log(title)
console.log(servicePercentPrice);

