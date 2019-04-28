// ЗАДАНИЕ 1

let a = [
 [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
 [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
 [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];

let b = JSON.parse(JSON.stringify(a)); 
console.log(b);


// ЗАДАНИЕ 2 

let basketShop = [
    {name: 'phone', price: 150 },
    {name: 'caseForPhone', price: 50},
    {name: 'delivery', price: 0}
];

function sumPrice(basketShop) {
    let sum = {};
    basketShop.forEach(function (i) {
        for (let price in i) {
            if (i.hasOwnProperty(price)) {
                sum[price] = sum[price] || 0;
                sum[price] += i[price];
            }
        }
    });
    return sum;
}
console.log(sumPrice(basketShop)['price']);


//ЗАДАНИЕ 3

for(i = -1; i < 9; i++, console.log(i)){} //пустое тело цикла

for(i = 0; i < 10; i++) // можно и так, вообще без тела цикла
console.log(i); 
