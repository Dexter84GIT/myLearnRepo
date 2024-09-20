let title = 'lesson02';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = '2000';
let rollback = '15';
let fullPrice = '100500';
let adaptive = false;

console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length)

console.log(`Стоимость верстки экранов ` + screenPrice + ` рублей/долларов/гривен/юаней`);
console.log(`Стоимость разработки сайта ` + fullPrice + ` рублей/долларов/гривен/юаней`);

console.log((screens).toLowerCase (screens).split(", "));
console.log(`Процент отката посреднику за работу ` + fullPrice * (rollback/100));