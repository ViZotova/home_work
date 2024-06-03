// const numbers = [1, 2, 3, 4, 5]
// const numbers = [1, '2', [1, 2, 3], 5]

// numbers[4] = 6

// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] + 1)
// }

// 1 Создайте произвольный массив чисел. Используя цикл for обойдите этот массив и выведите в консоль только четные числа.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x = 1; x < 10; x = x + 2) {
    console.log (numbers[x])
}

// 2 Создайте массив из всех цветов радуги. Используя цикл for обойдите этот массив и выведите в консоль все цвета радуги, но в обратном порядке, p.s. обратите внимание на индексы массивов и стартовую позицию для i.

const rainbow = [1, 2, 3, 4, 5, 6, 7]

rainbow [1] = 'red'
rainbow [2] = 'orange'
rainbow [3] = 'yellow'
rainbow [4] = 'grin'
rainbow [5] = 'blue'
rainbow [6] = 'blue'
rainbow [7] = 'purple'

for (let i = 7; i >= 1; i = i - 1) {
    console.log(rainbow [i])
}

// for (let i = 0; i < rainbow.length; i = i - 1) {
//     console.log(rainbow [1])
// }
