'use strict'

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 15,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && (num > 0);
    },
    asking: function() {
        appData.title = prompt('Как называется ваш проект?', "Калькулятор вёрстки")
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, сложные, адаптивные");
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
        }
        while ((!appData.isNumber(appData.screenPrice) && (appData.isNumber(appData.screenPrice) !== null)))

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');    

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?');
            let price = 0;
        
                do {
                    price = prompt("Сколько это будет стоить?");
                }
                while (!appData.isNumber(price))
                    
                appData.services[name] = +price;

            }
    },
    getAllServicePrices: function() {
        for(let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function() {
        appData.fullPrice =  +appData.screenPrice + +appData.allServicePrices;
    },
    getServicePercentPrices: function() {
        appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback/100))
    },
    getTitle: function() {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
    },
    getRollBackMessage: function(price) {
        if (price >= 30000){
           return 'Даем скидку в 10%';
        } else if (15000 <= price && price < 30000) {
            return 'Даем скидку в 5%';
        } else if (0 <= price && price < 15000) {
            return 'Скидка не предусмотрена';
        } else {
            return 'Что то пошло не так'
        }
   },
    logger: function() {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
    }
}
appData.start();


