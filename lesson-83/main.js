// Объекты - структура данных которая позволяет в себе хранить значения Записываются в фигурные скобки {} и внутри содержимое объекта Объект состоит из свойств то есть описание этого объекта Все свойства записываются в виде {ключ:значение} Ключ - всегда строка и можно записать без кавычек и с запятой Похоже на css свойства После запятой новое свойство В качестве значейний любые типы данных Чтобы обратиться к свойству объекта - название объекта ставим точку и указываем свойство (console)

// const user = {
//     name: 'Alex',
//     age: 23,
//     isAdmin: false
// }
// console.log (user.name)

//несколько объектов В качестве объекта могут быть сами значения

const users = {
    alex: {
        age: 23,
        isAdmin: false
    },
    john: {
        age: 30,
        isAdmin: true
    }
}
console.log(users.alex)
console.log(users.alex.isAdmin)
console.log(users.john)

//Методы объекта Функции которые выступают в качестве свойства объекта

const userJ = {
    john: {
        age: 30,
        isAdmin: true,
        sayHello (name) {
            console.log(`Hello ${name}`)
        }
    }
}
//в скобках значение name
userJ.john.sayHello('Tom')

//пример структуры через массив [{}] Выйти из объекта через запятую }, Можно перебрать массив через цикл for

const users2 = [
    {
        name: 'Vika',
        age: 31,
        isAdmin: false
    },
    {
        name: 'Alex',
        age: 19,
        isAdmin: true
    }
]
//Методы объектов Аргумент - что нужно поместить в массив
users2.push({
    name: 'Ivan',
    age: 30,
    isAdmin: true
})

for (let i = 0; i < users2.length; i++) {
    console.log(users2[i].name) // обращение к нужному свойству name - имена всех пользователей
    console.log(users2[i].age) 
    console.log(users2[i]) // + метод
}

//Важно Все в ДжС объекты - важно ставить точку

//строки имеют свои методы Пример через точку
const foo = 'hello world'
console.log(foo.toUpperCase())

//1) Создайте объект с вашим описанием(имя, возраст и т.д.).
const user = {
    name: 'Vika',
    age: 31
}
console.log(user)

//2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.

const userV = {
    vika: {
        age: 31,
        sayHello (name) {
            console.log(`Hello ${name}`)
        }
    }
}
userV.vika.sayHello('Vika')

//3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную с количеством простых пользователей.

// Создание массива объектов с описанием пользователей
let users3 = [{ 
    name: 'Vika', 
    isAdmin: true 
},{ 
    name: 'Alex', 
    isAdmin: false 
},{ 
    name: 'Mary', 
    isAdmin: false 
},{ 
    name: 'Max', 
    isAdmin: true 
}]

let simpleUsersCount = 0;

for (let user of users3) {
    if (!user.isAdmin) {
    simpleUsersCount++;
}
}

console.log('Количество простых пользователей: ' + simpleUsersCount);