console.log('створити функцію, яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент');
function text(parag) {
document.write(`<p>${parag}</p>`);
}

text('English');
text('very');
text('difficulty');
