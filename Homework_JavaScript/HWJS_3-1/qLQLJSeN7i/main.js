let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//1. перебрати його циклом while
/*let a = 0;
while (a < arr.length) {
console.log(arr[a++]);
}

//9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
let b = arr.length - 1;
while (b >= 0) {
    console.log(arr[b--]);
}

//2. перебрати його циклом for
for (let c = 0; c < arr.length; c++) {
 console.log(arr[c]);}

//9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
for (let d = arr.length-1; d >=0; d--) {
    console.log(arr[d]);
}

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
let e = 0;
while (e < arr.length) {
    if (e % 2 !==0) {
        console.log(arr[e]);
    }
    d++;
}

//9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
let f = arr.length-1;
while (f >=0) {
    if (f % 2 !==0) {
        console.log(arr[f]);
    }
    f--;
}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let g = 0; g<arr.length; g++) {
    if (g%2 !==0) {
        console.log(arr[g]);
    }
}

//9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
for (let h = arr.length; h>=0; h--) {
    if (h%2 !==0) {
        console.log(arr[h]);
    }
}

//5. перебрати циклом while та вивести  числа тільки парні  значення
let i = 0;
while (i < arr.length) {
    if (!(i % 2)) {
        console.log(arr[i]);
    }
    i++;
}

//9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
let j = arr.length-1;
while (j>=0) {
    if (!(j%2)) {
        console.log(arr[j]);
    }
    j--;
}

//6. перебрати циклом for та вивести  числа тільки парні  значення
for (let k=0; k<arr.length; k++) {
    if (!(k % 2)) {
        console.log(arr[k]);
    }
}

//9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)
for (let l=arr.length-1; l>0; l--) {
    if (!(l%2)) {
        console.log(arr[l]);
    }
}
*/
//7. замінити кожне число, кратне 3, на слово “okten”
for (let m=0; m < arr.length; m++) {
    if (arr[m]%3 ===0) {
        arr[m] = "okten";
    }
}
//8. вивести масив у зворотньому порядку.
for (let n = arr.length-1; n >=0; n--) {
    console.log(arr[n]);
}
