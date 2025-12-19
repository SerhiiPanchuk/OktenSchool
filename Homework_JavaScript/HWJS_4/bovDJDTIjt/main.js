// створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.
let arr = [
    {id:'1',name:'vasya', age:23},
    {id:'2',name:'dolya', age:654},
    {id:'3',name:'saya', age:65},
    {id:'4',name:'vitsya', age:564},
    {id:'5',name:'sdgeya', age:983}
];

function foobar(array) {
    for (let i of array) {
        document.write(`<div>${i.id} ${i.name} ${i.age}</div>`);
    }
}

foobar(arr);
