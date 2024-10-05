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
    service1: '',
    service2: '',
    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger();
    },
    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num) && (num > 0);
    },
    getAllServicePrices: function() {
        let sum = 0;
        let price;
    
      for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }
    
            do {
                price = prompt("Сколько это будет стоить?");
            }
            while (!appData.isNumber(price))
    
            sum += +price;
        }
        return sum;
    },
    getFullPrice: function() {
        return +appData.screenPrice + +appData.allServicePrices;
    },
    getServicePercentPrices: function() {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback/100))
    },
    getTitle: function() {
        let clearTitle = appData.title.trimStart()
        let firstLetter = clearTitle.charAt(0);
        let secondLetter = clearTitle.slice(1);
        let fullLetter = firstLetter.toUpperCase() + secondLetter.toLowerCase();
        return fullLetter;
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
    asking: function() {
        appData.title = prompt('Как называется ваш проект?', "Калькулятор вёрстки")
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, сложные, адаптивные");
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?');
        }
        while ((!appData.isNumber(appData.screenPrice) && (appData.isNumber(appData.screenPrice) !== null)))
            appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    logger: function() {
        console.log(appData.title);
        console.log(appData.tifullPricetle);
        console.log(appData.servicePercentPrice);
        for (let key in appData) {  // цикл for in перебирает объект столько раз, сколько в нем ключей
            console.log('Ключ: ' + key + ' ' + 'Значение: ' + appData[key]);
        }
    }

}
appData.start();


