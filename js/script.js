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
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle();
        pageButtonStart.addEventListener('click', appData.start)
        plusButton.addEventListener('click', appData.addScreenBlock)
    },
    addTitle: function () {
        document.title = siteTitle.textContent;
    },
    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
//         appData.getServicePercentPrices();
//         appData.logger();
        console.log(appData);
        appData.showResult();
    },
    showResult: function () {
        pageInputTotal.value = appData.screenPrice
        pageInputTotalCountOther.value = appData.servicePricesNumber + appData.servicePricesPercent
        pageInputTotalFullCount.value = appData.fullPrice
    },
    addScreens: function () {
        pageScreen = document.querySelectorAll('.screen');

        pageScreen.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({ 
                id: index, 
                name: selectName, 
                price: +select.value * +input.value 
            })
        })  
        console.log(appData.screens);
    },
    addServices: function () {
        percentItems.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }

        })
        numberItems.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addScreenBlock: function () {
        const cloneScreen = pageScreen[0].cloneNode(true)
        pageScreen[pageScreen.length - 1].after(cloneScreen);       
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key]
        }
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100)
        }
        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
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
appData.init();


