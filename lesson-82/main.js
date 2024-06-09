// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.

const users = ['John', 'Vika', 'Alex']

function checkForCopyItem(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return `Hello, ${item} !`
        }
    }
    return `There is no such item in the array`
}

console.log(checkForCopyItem(users, 'Vika'))

// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.


const numbers = [5, 10, 15, 20]

function MoreTen (array) {
    for (let x = 0; x < array.length; x++) {
        if (array[x] > 10)  {
        console.log(array[x]) 
        }
    }
}

console.log (MoreTen (numbers))

// 3) Предлагаю вам реализовать простенький калькулятор. Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора. При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1. То есть мы получаем разницу между первым и вторым аргументом. Запишите результат выполнения функции в переменную и выведите в консоль. Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.

function meaning1 (first, second) {
    return first + second 
}

const result = meaning1 (2, 3, 'sum')
console.log(result) 


function meaning2 (first, second) {
    return first - second 
}

const result2 = meaning2 (2, 3, 'minus')
console.log(result2) 

function meaning3 (first, second) {
    return first / second 
}

const result3 = meaning3 (10, 5, 'drob')
console.log(result3) 

function meaning4 (first, second) {
    return first * second 
}

const result4 = meaning4 (10, 5, 'umn')
console.log(result4)


