'use strict'

const siteTitle = (document.getElementsByTagName('h1')[0]);
const pageButtonStart = document.getElementsByClassName('handler_btn')[0]
const pageButtonReset = document.getElementsByClassName('handler_btn')[1]

const plusButton = document.querySelector('.screen-btn')
const percentItems = document.querySelectorAll('.other-items.percent')
const numberItems = document.querySelectorAll('.other-items.number')

const pageRange = document.querySelector('.rollback input[type=range]')

const pageRangeValue = document.querySelector('.rollback span.range-value')

const pageInputTotal = document.getElementsByClassName('total-input')[0]
const pageInputTotalScreens = document.getElementsByClassName('total-input')[1]
const pageInputTotalCountOther = document.getElementsByClassName('total-input')[2]
const pageInputTotalFullCount = document.getElementsByClassName('total-input')[3]
const pageInputTotalCountRollback = document.getElementsByClassName('total-input')[4]

let pageScreen = document.querySelectorAll('.screen')

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    emptyFields: false,
    init: function () {
        this.addTitle();
        this.noWay();
        pageButtonStart.addEventListener('click', this.noWay)
        plusButton.addEventListener('click', this.addScreenBlock)
        pageRange.addEventListener('input', this.rollbackRange.bind(appData))
        pageButtonReset.addEventListener('click', this.reset.bind(appData))
    },
    addTitle: function () {
        document.title = siteTitle.textContent;
    },
    noWay: function () {
        let screens = document.querySelectorAll('.screen')

        this.emptyFields = false;

        screens.forEach(screen => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            if (select.value === '' || input.value === '') {
                this.emptyFields = true;
            }
        })
        if (!this.emptyFields) {
            appData.start()
        }
    },
    start: function () {
        this.addScreens();
        this.addServices();
        this.addPrices();
        this.changeButton()
        this.logger();
        this.showResult();
        this.blockInputs();
    },
    reset: function () {
        this.changeButton();
        this.nullValues();
        this.deleteEvents();
        this.init();   
    },
    blockInputs: function () { 
        const select = document.querySelectorAll('select');
        const textInputs = document.querySelectorAll('input[type=text]')
        select.forEach(sel => {
            sel.disabled = true
        })
        textInputs.forEach(input => {
            input.disabled = true
        })
        plusButton.disabled = true
    },
    changeButton: function () {
        pageButtonStart.style.display = 'none';
        pageButtonReset.style.display = 'block';
    },
    nullValues: function () { 
        const select = document.querySelectorAll('select');
        const textInputs = document.querySelectorAll('.screen input[type=text]')
        const results = document.querySelectorAll('.main-total__items input')
        const checkbox = document.querySelectorAll('input[type=checkbox]')
        const screensRow = document.querySelectorAll('.screen')
        pageRange.value = '0'
        pageRangeValue.textContent = `${pageRange.value}%`
        screensRow.forEach((screen, index) => {
            if (index > 0) {
                screen.remove()
            }
        })
        this.screens = []
        this.screenPrice = 0
        plusButton.disabled = false
        select.forEach(sel => {
            sel.disabled = false
            sel.selectedIndex = 0
        })
        textInputs.forEach(input => {
            input.value = 0
            input.disabled = false
        })
        results.forEach(res => {
            res.value = 0          
        })
        pageButtonStart.style.display = 'block';
        pageButtonReset.style.display = 'none';
        checkbox.forEach(check => {
            check.checked = false;
        })
    },
    deleteEvents: function () {
        pageButtonStart.removeEventListener('click', this.noWay)
        plusButton.removeEventListener('click', this.addScreenBlock)
        pageRange.removeEventListener('input', this.rollbackRange)
    },
    rollbackRange: function () {
        pageRangeValue.textContent = `${pageRange.value}%`;
        this.rollback = pageRange.value
    },
    showResult: function () {
        pageInputTotal.value = this.screenPrice
        pageInputTotalCountOther.value = this.servicePricesNumber + this.servicePricesPercent
        pageInputTotalFullCount.value = this.fullPrice
    },
    addScreens: function () {
        pageScreen = document.querySelectorAll('.screen');

        pageScreen.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value
            })
        })
    },
    addServices: function () {
        percentItems.forEach(item => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }
        })
        numberItems.forEach(item => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    addScreenBlock: function () {
        const cloneScreen = pageScreen[0].cloneNode(true)
        pageScreen[pageScreen.length - 1].after(cloneScreen);
    },
    addPrices: function () {
        pageInputTotalScreens.value = null;
        let inputs = document.querySelectorAll('.screen .main-controls__input input');
        let inputData = null;
        for (let screen of this.screens) {
            this.screenPrice += +screen.price
        }
        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }
        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            inputData += +input.value;
        }
        pageInputTotalScreens.value = inputData;
        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;
        pageInputTotalCountRollback.value = this.fullPrice - (this.fullPrice * (this.rollback / 100))
    },
    logger: function () {

    }
}
appData.init();


