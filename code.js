// ЗАДАНИЕ 1

//1 пример
let a = 1, b = 1, c, d;
c = ++a;
alert(c); /* ответ 2, префиксный инкремент. Значение переменной 
           сначала увеличивается, потом возвращается. То есть с = a + 1 = 2 */

//2 пример
d = b++;
alert(d); /* ответ 1, постфиксный инкремент. В таком случае 
           сначала переменной присваивается значение d = 1, но сама d равна b++ */

//3 пример
c = (2 + ++a);
alert(c); /* ответ 5. Переменная a сначала была 1, потом увеличилась 
           на 1, в этом примере тоже увеличилась на 1. Итого 2 + 3 = 5 */

//4 пример
d = (2 + b++);
alert(d); /* ответ 4. Сначала b = 1, потом увеличилась на 1 и b стала равной 2. 
           В данном примере постфиксный инкемент, сначала в d возвращается сама переменная b (то есть 2), 
           потом она увеличивается. Значит 2 + 2 = 4 */

alert(a); //ответ 3 - переменная стала = 3 в результате операций выше
alert(b); //ответ 3 - переменная стала = 3 в результате операций выше



// ЗАДАНИЕ 2
let a = 2;
let x = 1 + (a *= 2); // ответ 5. Присваивание с умножением. a *= 2 это тоже самое, что и a = a * 2


// ЗАДАНИЕ 3
function getRandomInRange(min, max) {
    a = Math.floor(Math.random() * (max - min + 1)) + min;
    b = Math.floor(Math.random() * (max - min + 1)) + min;
    return;
}
getRandomInRange(-100, 100)

if (a >= 0 && b >= 0) {
    c = a - b;
    alert(c);
} else if (a < 0 && b < 0) {
    c = a * b;
    alert(c);
} else {
    c = a + b;
    alert(c);
}


//ЗАДАНИЕ 4

//сложение
function sum(a, b) {
    c = a + b;
    alert(c);
    return;
}

//вычитание
function subtract(a, b) {
    c = a - b;
    alert(c);
    return;
}

//умножение
function multiply(a, b) {
    c = a * b;
    alert(c);
    return;
}

//деление
function divide(a, b) {
    if (b === 0) {
        return null;
    } else {
        c = a / b;
        alert(c);
        return;
    }
}


// ЗАДАНИЕ 5
let a = Number(prompt('Напишите число 1'));
let b = Number(prompt('Напишите число 2'));
let c = '';
let operation = prompt('Сложить, делить, умножить или вычесть?');

function mathOperation(a, b, operation) {
    switch (operation) {
        case 'сложить':
            sum(a, b);
            break;
        case 'вычесть':
            subtract(a, b);
            break;
        case 'умножить':
            multiply(a, b);
            break;
        case 'делить':
            divide(a, b);
            break;
        default:
            alert('Нет таких действий, попробуйте снова')
    }
}

mathOperation(a, b, operation)