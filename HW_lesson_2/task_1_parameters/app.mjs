//========================================== Задача 1 ========================================== 
// У консольний додаток передають через параметр пенсійний вік. Наприклад
// node app.mjs –-pension=65
// Потім питаємо у терміналі користувача скільки йому років(використати “readline”) 
// і кажемо чи він є пенсіонером.
// =============================================================================================

import * as readline from 'readline/promises';
import { argv, stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

const argsString = argv.slice(2).join('&')
const argsURLParams = new URLSearchParams(argsString) //argsStrings takes --pension=65 in our case

const pensionAge = argsURLParams.get('--pension')
const answer = await rl.question('How old are you?');
const userAge = parseInt(answer) //parse string to number


if (userAge >= pensionAge)
    console.log(`You are ${answer} years old, so you are a pensioner.`);
else if (isNaN(userAge))
    console.log('Something is wrong here.');
else console.log(`You are ${answer} years old, so you are not a pensioner.`);

rl.close(); //to close readline. this is necessery to do.

