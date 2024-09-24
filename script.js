let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let rollback = 15;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let fullPrice = (Number(screenPrice + servicePrice1 + servicePrice2));
let servicePercentPrice = (fullPrice) - (fullPrice * rollback/100);



//console.log(typeof title);
//console.log(typeof screenPrice);
//console.log(typeof adaptive);
//
//console.log(screens.length)
//
//console.log(`Стоимость верстки экранов ${screenPrice} рублей/долларов/гривен/юаней`);
//
//console.log(`Стоимость разработки сайта ${fullPrice} рублей/долларов/гривен/юаней`);
//
//console.log(screens.toLowerCase().split(", "));
//
//console.log(`Процент отката посреднику за работу ` + fullPrice * (rollback/100));



console.log(title);

console.log(screens);

console.log(parseInt(screenPrice));

console.log(adaptive);

console.log(service1);

console.log(parseInt(servicePrice1));

console.log(service1);

console.log(parseInt(servicePrice2));

console.log(Math.ceil(servicePercentPrice));

console.log(fullPrice);
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


