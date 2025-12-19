//Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) => 400
let values = [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}];
let UAH = 10000;
let country = 'USD';

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (i of currencyValues) {
        if ( i.currency === exchangeCurrency) {
            return sumUAH/i.value;
        }
    }
}

console.log(exchange(UAH, values, country));
