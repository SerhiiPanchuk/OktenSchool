//Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.writefor (let i=1; i<=100; i++) {
for (let i=1; i<=100; i+=2) {
    console.log(i);
    document.write(`<p>${i} </p>`);
}
