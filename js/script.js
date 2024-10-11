'use strict'

const siteTitle = (document.getElementsByTagName('h1')[0]);
const pageButtonStart = document.getElementsByClassName('handler_btn')[0]
const pageButtonReset = document.getElementsByClassName('handler_btn')[1]
const plusButton = document.querySelector('.screen-btn')
const percentItems = document.querySelectorAll('.other-items.percent')
const numberItems = document.querySelectorAll('.other-items.number')
const pageRange = document.querySelector('.rollback input[type=range]')
const pageRangeValue = document.querySelector('.rollback span.range-value')
const pageInputTotal =  document.getElementsByClassName('total-input')[0]
const pageInputTotalCount =  document.getElementsByClassName('total-input')[1]
const pageInputTotalCountOther =  document.getElementsByClassName('total-input')[2]
const pageInputTotalFullCount =  document.getElementsByClassName('total-input')[3]
const pageInputTotalCountRollback =  document.getElementsByClassName('total-input')[4]
let pageScreen = document.querySelectorAll('.screen')


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 15,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && (num > 0);
    },
    asking: function () {
        for (let i = 0; i < 1; i++) {
            let name = '';
            do {
                name = prompt('Как называется ваш проект?');
            } while
                (appData.isNumber(name))
            appData.title = name;
        }
        for (let i = 0; i < 2; i++) {
            let name = '';
            let price = 0;
            do {
                name = prompt('Какие типы экранов нужно разработать?');
                price = prompt('Сколько будет стоить данная работа?');
            }
            while ((appData.isNumber(name)) && (!appData.isNumber(price)))

            appData.screens.push({ id: i, name: name, price: price })
        }
        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?');
            let price = 0;
            do {
                price = prompt("Сколько это будет стоить?");
            }
            while (!appData.isNumber(price))

            appData.services[name] = +price;

        }
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + +appData.allServicePrices;
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },
    getRollBackMessage: function (price) {
        if (price >= 30000) {
            return 'Даем скидку в 10%';
        } else if (15000 <= price && price < 30000) {
            return 'Даем скидку в 5%';
        } else if (0 <= price && price < 15000) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что то пошло не так'
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }
}
appData.start();


