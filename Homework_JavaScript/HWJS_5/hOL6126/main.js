//створити функцію, яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

let table = (text) => document.write(`<ul>
          <li>${text}</li>
          <li>${text}</li>
          <li>${text}</li>
     </ul>`);


table('first');
