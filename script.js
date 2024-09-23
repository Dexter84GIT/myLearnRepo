let title = 'lesson02';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 2000;
let rollback = 15;
let fullPrice = 100500;
let adaptive = false;

console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length)

console.log(`Стоимость верстки экранов ${screenPrice} рублей/долларов/гривен/юаней`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей/долларов/гривен/юаней`);

console.log(screens.toLowerCase().split(", "));
console.log(`Процент отката посреднику за работу ` + fullPrice * (rollback/100));

title = prompt('Как называется ваш проект?');
// console.log(title);
screens = prompt('Какие типы экранов нужно разработать?');
// console.log(screens);
screenPrice = +prompt('Сколько будет стоить данная работа?');
// console.log(parseInt(screenPrice));
adaptive = confirm('Нужен ли адаптив на сайте?');
// console.log(adaptive);
let service1 = prompt('Какой дополнительный тип услуги нужен?');
// console.log(service1);
let servicePrice1 = +prompt('Сколько это будет стоить?')
// console.log(servicePrice1);
let service2 = prompt('Какой дополнительный тип услуги нужен?');
// console.log(service1);
let servicePrice2 = +prompt('Сколько это будет стоить?')
// console.log(servicePrice2);
fullPrice = (Number(screenPrice + servicePrice1 + servicePrice2));
// console.log(fullPrice);
let servicePercentPrice = (fullPrice) - (fullPrice * rollback/100);
console.log(Math.ceil(servicePercentPrice));

switch (true) {
    case fullPrice >= 30000:
        console.log('Даем скидку в 10%');
        break
    case 15000 <= fullPrice && fullPrice < 30000:
        console.log('Даем скидку в 5%')
        break
    case 0 <= fullPrice && fullPrice < 15000:
        console.log('Скидка не предусмотрена')
        break
    case  fullPrice < 0:
        console.log('Что то пошло не так')
        break
}

