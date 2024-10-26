//========================================== Задача 2 ========================================== 
//Користувач через роут ‘/save_num/число’ може передати на сервер якесь число. 
//Ці числа поступово треба зберігати у текстовому файлі numbers.txt.
//Наприклад, використовуючи такий роут:http://localhost:3000/save_num/78  -  у файл треба додати число 78.
//А використовуючи роути  ‘/sum’ – знайти суму, ‘mult’ –знайти добуток. За роутом «/remove» файл треба видалити.
// =============================================================================================


import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('How old are you?');

const pensionOlder = 65;

if (answer >= pensionOlder)
    console.log(`You are ${answer} years old, so you are a pensioner.`);
else if (answer !== NaN)
    console.log('Something is wrong here.');
else console.log(`You are ${answer} years old, so you are not a pensioner.`);

rl.close(); //to close readline. this is necessery to do.