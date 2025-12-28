//створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

let arr = [23,'cosmo',true, 543, 'alley'];
let list = (array)=> {
    document.write('<ul>');
    for (let i of array) {
        document.write(`<li>${i}</li>`);
    }
    document.write('</ul>');
}

list(arr);
