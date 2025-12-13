//Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr = [10, 'print', "profavore", true, false, 9345, true, true, 'sambrero', 10, 23];
for (i of arr) {
    if (typeof i === 'string') {
        console.log(i);
    }
}
