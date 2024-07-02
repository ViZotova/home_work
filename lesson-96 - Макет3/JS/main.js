// //https://fslightbox.com/javascript Для видео
// //Бургер-меню - при нажатии на меню идет обработка события клика и показывать действия на клик / через модификатор body--opened-menu
// //прописываем функцию и сразу вызываем, для менюшки адаптива / анонимная / конкретная область видимости без глобальной / чтобы не было конфликта одинаковых переменных / создаем локальную
// (function() { 

//    document.addEventListener('click', burgerInit) //делегирование событий / по клику будет воспроизводится функция
//     function burgerInit(e) {

//         const burgerIcon = e.target.closest('.burger-icon') // проверяет есть ли у элемента родитель с классом '' и если есть то функция возвращает родителя
//         const burgerNavLink = e.target.closest('.nav__link') //элементы меню / возвращает родителя и если сам элемент nav__link

//         // console.log(document.documentElement.clientWidth) Узнать размер ширины экрана клиенты


//         if (!burgerIcon && !burgerNavLink) return //если нет БургерАйкон или БургернавЛинк / return - прекращаю выполнение

//         if(document.documentElement.clientWidth > 900) return // есши ширина больше 900 то условия прерываются, если меньше то условия ниже срабатывают

//         if (!document.body.classList.contains('body--opened-menu')) { //проверка
//             document.body.classList.add('body--opened-menu')//добавляем еще класс если у body еще нет класса
//             } else { //иначе его удаляем
//             document.body.classList.remove('body--opened-menu')
//         }

//     }

// })()

(function() {
    
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

})()