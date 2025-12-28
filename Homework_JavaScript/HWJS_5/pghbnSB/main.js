//створити функцію яка повертає найменьше число з масиву
let arr = [32, 432, 56, 73, 83, 186, 835, -856, 934, 83];

let minNumber = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    console.log(min);
    return min;
}

minNumber(arr);
