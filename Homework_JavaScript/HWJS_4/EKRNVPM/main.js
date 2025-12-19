//створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arr = [1,2,10];
function sum(arr) {
    let basket = 0;
    for (const i of arr) {
    basket += i;
    }
    return basket;
}

console.log(sum(arr));
