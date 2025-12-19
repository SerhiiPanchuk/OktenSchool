console.log('створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах');
let arr = [11, 22, 33, 44];
console.log(arr);

function swap(arr, i1, i2)
{
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1];
        arr[i1] = arr[i2];
        arr[i2] = temp;
        return arr;
    }
    return 'щось не так';
}

console.log(swap(arr, 0, 1));
