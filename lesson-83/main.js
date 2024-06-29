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
let users = [{ 
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

for (let user of users) {
    if (!user.isAdmin) {
    simpleUsersCount++;
}
}

console.log('Количество простых пользователей: ' + simpleUsersCount);