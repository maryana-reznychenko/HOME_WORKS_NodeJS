//========================================== Задача 1 ========================================== 
// У консольний додаток передають через параметр пенсійний вік. Наприклад
// node app.mjs –-pension=65
// Потім питаємо у терміналі користувача скільки йому років(використати “readline”) 
// і кажемо чи він є пенсіонером.
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