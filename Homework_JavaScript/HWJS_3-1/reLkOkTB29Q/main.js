//створити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {title: "Англійська для чайників", pages: 45000, authors: ['John', 'Mike', 'James', 'Kate'], genres: ['horror', 'traveling']},
    {title: "Математика для чайників", pages: 2346, authors: ['Вікторія', 'Анастейша', 'Зуся', 'Зінаіда'], genres: ['учбові', 'math', 'horror']},
    {title: "Маскарпоне", pages: 400, authors: ['Луі', 'Ніккі', 'James', 'Kat'], genres: ['кулінарія', 'food', 'eat']},
    {title: "Равіоллі", pages: 6540, authors: ['МакороНіна', 'СпагеТіна'], genres: ['кухня', 'smak', 'smakota', ' shik']},
    {
        title: "Чому ревуть воли",
        pages: 765,
        authors: ['Степан', 'Роза', 'Сталлоне', 'Миссис Рухля', "Мистер Бин"],
        genres: ['комедія', 'поезія', "любов", "економіка", "філософія"]
    },
    {title: "Жахіття", pages: 875, authors: ['Жах1', 'Жах2', 'Жах3'], genres: ['horror']},
    {title: "Енциклопедія", pages: 1000000, authors: ['Люди', 'Народ', "Плем'я", "Односельчани"], genres: ['учбові']},
    {title: "Термінатор", pages: 985, authors: ['Arnold'], genres: ['action']},
    {title: "GTA5", pages: 45, authors: ['Trevor', 'Mike', 'James'], genres: ['detective']},
    {title: "Yoga", pages: 1, authors: ['krishan', 'chulan', 'Uxurber', 'Lemon', 'orange'], genres: ['physics']}
]
console.log('знайти найбільшу книжку');
let biggestBook = books[0];
for (let i of books) {
    if (i.pages > biggestBook.pages) {
        biggestBook = i;
    }
}
console.log(biggestBook);
//--------------------------------------------------------------------
console.log('знайти книжку/ки з найбільшою кількістю жанрів');
let genresCount = 0;
let results = [];
for (let i of books) {
    if (i.genres.length > genresCount) {
        genresCount = i.genres.length;
        results = [i];
    } else if (i.genres.length === genresCount) {
        results.push(i);
    }
}
console.log(results);

//--------------------------------------------------------------------

console.log("знайти книжку/ки з найдовшою назвою");
let longTitle = 0;
let resultsTitle = [];
for (let i of books) {
    if (i.title.length > longTitle) {
        longTitle = i.title.length;
        resultsTitle = [i];
    } else if (i.title.length === longTitle) {
        resultsTitle.push(i);
    }
}
console.log(resultsTitle);

//--------------------------------------------------------------------

console.log("знайти книжку/ки, які писали 2 автори");
let resAuthors = [];
for (let i of books) {
    if (i.authors.length === 2) {
        resAuthors.push(i);
    }
}
console.log(resAuthors);

//--------------------------------------------------------------------

console.log("знайти книжку/ки, які писав 1 автор");
let resAuthor = [];
for (let i of books) {
    if (i.authors.length === 1) {
        resAuthor.push(i);
    }
}
console.log(resAuthor);

//--------------------------------------------------------------------

console.log("Створити пустий масив та заповнити його 50 парними числами за допомоги циклу.");
let arr = [];
for (let i = 2; arr.length < 50; i += 2) {
    arr.push(i);
}
console.log(arr);

//--------------------------------------------------------------------

console.log("заповнити його 50 непарними числами за допомоги циклу.");
let arr1 = [];
for (let i = 1; arr1.length < 50; i += 2) {
    if (i % 2 !== 0) {
        arr1.push(i);
    }
}
console.log(arr1);

//--------------------------------------------------------------------

console.log("Заповнити масив 20-ма рандомними числами.");
let arr2 = [];
for (let i = 0; arr2.length < 20; i++) {
    let a = Math.floor(Math.random() * 101);
    arr2.push(a);
}
console.log(arr2);

//--------------------------------------------------------------------

console.log("Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 arr3");
let arr3 = [];
for (let i = 0; arr3.length < 20; i++) {
    let a = Math.floor(Math.random() * 725) + 8;
    arr3.push(a);
}
console.log(arr3);

//--------------------------------------------------------------------

console.log("Вивести за допомогою console.log кожен третій елемент");
for (let i = 2; i < arr3.length; i += 3) {
    console.log(arr3[i]);
}

//--------------------------------------------------------------------

console.log("Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.");
for (let i = 2; i < arr3.length; i += 3) {
    if (arr3[i] % 2 === 0) {
        console.log(arr3[i]);
    }
}

//--------------------------------------------------------------------

console.log('Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив');
let arr4 = [];
for (let i = 2; i < arr3.length; i += 3) {
    if (arr3[i] % 2 === 0) {
        arr4.push(arr3[i]);
    }
}
console.log(arr4);

//--------------------------------------------------------------------

console.log("Вивести кожен елемент масиву, сусід справа якого є парним");
for (let i = 0; i < arr3.length - 1; i++) {
    if (arr3[i + 1] % 2 === 0) {
        console.log(arr3[i]);
    }
}

//--------------------------------------------------------------------

console.log('Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.');
let purchases = [100, 250, 50, 168, 120, 345, 188];
let sum = 0;
for (let i of purchases) {
    sum = sum + i;
}
chek = sum / purchases.length;
console.log(chek);

//--------------------------------------------------------------------

console.log('Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив');
let arr5 = [];
let arr6 = [];
for (let i = 0; arr5.length < 20; i++) {
    let rand = Math.floor(Math.random() * 100)
    arr5.push(rand);
}
for (let i of arr5) {
    arr6.push(i * 5);
}
console.log(`це перший массив ${arr5}`);
console.log(`це другий массив ${arr6}`);

//--------------------------------------------------------------------

console.log('Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.');
let arr7 = ['lorem', 456, true, 'sanctum', 4, 'street', false, 'Mozart', 543];
let arr8 = [];
for (let i of arr7) {
    if (typeof i === 'number') {
        arr8.push(i);
    }
}
console.log(arr8);

//--------------------------------------------------------------------

console.log('Дано 2 масиви з рівною кількістю об’єктів.З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” Записати цей об’єкт в новий масив');
let usersWithId = [

    {id: 1, name: 'vasya', age: 31, status: false},

    {id: 2, name: 'petya', age: 30, status: true},

    {id: 3, name: 'kolya', age: 29, status: true},

    {id: 4, name: 'olya', age: 28, status: false}

];

let citiesWithId = [

    {user_id: 3, country: 'USA', city: 'Portland'},

{user_id: 1, country: 'Ukraine', city: 'Ternopil'},

{user_id: 2, country: 'Poland', city: 'Krakow'},

{user_id: 4, country: 'USA', city: 'Miami'}

];

let arr9 = [];
for (let i of usersWithId) {
    for (let a of citiesWithId) {
        if (i.id === a.user_id) {
            let userWithCity = {...i,...a};
            arr9.push(userWithCity);
        }
    }
}
console.log(arr9);

//--------------------------------------------------------------------

console.log('Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.');
let arr10 = [23,65,75,87,98,34,534,23,65,74];
for (let i of arr10) {
    if (i%2 === 0) {
        console.log(i);
    }
}

//--------------------------------------------------------------------

console.log('Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.')
let arr11 = [23,65,75,87,98,34,534,23,65,74];
let arr12 = [];
for (let i of arr11) {
    arr12.push(i);
}
console.log(arr11);
console.log(arr12);

//--------------------------------------------------------------------

console.log('Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.');
let arr13 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let word = '';
for (let i = 0; i < arr13.length; i++) {
    const letter = arr13[i];
    word = word + letter;

}
console.log(word);

//--------------------------------------------------------------------

console.log('Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.');
let arr14 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let word1 = '';
let count1 = 0;
while (count1 < arr14.length) {
    word1 += arr14[count1];
    count1++;
}
console.log(word1);

//--------------------------------------------------------------------

console.log('Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.')
let arr15 = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
let word2 = '';
for (let i of arr15) {
    word2 += i;
}
console.log(word2);
