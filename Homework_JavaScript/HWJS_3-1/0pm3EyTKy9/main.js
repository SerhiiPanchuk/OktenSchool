//Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr = [];
arr[0] = 1;
arr[1] = true;
arr[2] = false;
arr[3] = NaN;
arr[4] = 'futurama';
arr[5] = 'simpsons';
arr[6] = 'avokado';
arr[7] = 238947;
arr[8] = true;
arr[9] = 1;
for (let i of arr) {
    console.log(i);
}
