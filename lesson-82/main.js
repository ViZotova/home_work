// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.

const userName = ['Vika', 'Alex', 'Max', 'Mary']

function helloName (array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return `Hello ${item}`
        }
    }
}
console.log(helloName(userName, 'Vika'))

//2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.

const numbers = [5, 10, 15, 20]

function MoreTen (array) {
    for (let x = 0; x < array.length; x++) {
        if (array[x] > 10)  {
        console.log(array[x]) 
        }
    }
}

MoreTen (numbers))

//3) Предлагаю вам реализовать простенький калькулятор. 
//Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора. 
//При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1. 
//То есть мы получаем разницу между первым и вторым аргументом. Запишите результат выполнения функции в переменную и выведите в консоль. 
//Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

function calc(firstN, secondN, line) {
    switch(line) {
        case '+':
        return firstN + secondN;
        case '-':
        return firstN - secondN;
        case '*':
        return firstN * secondN;
        case '/':
        return firstN / secondN
    }
}

console.log(calc(1, 3, '+'))
console.log(calc(2, 3, '-'))
console.log(calc(5, 10, '*'))
console.log(calc(16, 4, '/'))
