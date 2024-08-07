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
    //Бургер функция
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

    //Модальное окно
    const modal = document.querySelector('.modal') // Запись переменной
    const modalButton = document.querySelector('.about__img-button') //Кнопка, при нажатии на которую вызывается модальное окно

    modalButton.addEventListener('click', openModal) //Событие клика по кнопке - открытия
    modal.addEventListener('click', closeModal) //Событие клика - закрытия - на весь элемнт модал

    function openModal(e) {
        e.preventDefault() // Отмена стандартного поведения
        document.body.classList.toggle('body--opened-modal') //Навешивание класса и модальное окно появляется
    }

    function closeModal(e) { //делегирование событий
        e.preventDefault() //Отмена дефолтного поведения

        const target = e.target // переменная таргет = сам элемент на которы кликнули внутри модального окна

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) { 
            // 2 условия - должно работать одно из условий 1 - элемент на который кликнули внутри модального окна должен быть модал-кэнсал или иметь родителя модал-кэнсол 2 - если таргет на который клинкули имееет класс - модал
            document.body.classList.remove('body--opened-modal') //закрытие модального окна
        }

    }

    // Табы

    const tabControls = document.querySelector('.tab-conrols') //переменная
    tabControls.addEventListener('click', toggleTab) //делегирование и отработка кликов / переключить вкладку на клик
    function toggleTab(e) { //объявление функции event = e
        const tabControl = e.target.closest('.tab-conrols__link') // проверка на кнопку по переключению/ есть ли родитель   

        if (!tabControl) return //если нет элемента то прекращаем функцию
        e.preventDefault() //отмена перекидывания на др страницу
        if (tabControl.classList.contains('tab-conrols__link--active')) return //если эта кнопка не активна / отменяем
        

        const tabContentID = tabControl.getAttribute('href') //переменная ID
        const tabContent = document.querySelector(tabContentID) // переменная вкладки
        const activeControl = document.querySelector('.tab-conrols__link--active')
        const activeContent = document.querySelector('.tab-content--show')
        //проверки

        if (activeControl) {
            activeControl.classList.remove('tab-conrols__link--active')//отмена
        }
        if(activeContent) {
            activeContent.classList.remove('tab-content--show') //вкладки открытие перед этим нужно закрыть
        }
        //актуальность
        tabControl.classList.add('tab-conrols__link--active')
        tabContent.classList.add('tab-content--show')//навесить show на кнопку которую нажали / href
    }
    
  // Аккордеон

    const accordionLists = document.querySelectorAll('.accordion-list'); //переменная - все акк листы

    accordionLists.forEach(el => { //по всем листам пройтись

        el.addEventListener('click', (e) => { //каждому клик
//делегирование событий
            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

            const accordionControl = e.target.closest('.accordion-list__control'); //куда кликаем
            if (!accordionControl) return //код продолжаем
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling; //след элемент после контрола / после кнопки идет контент

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) { //в момент клика другие вкладки закрываются
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion-list__item--opened'); //включается css

            if (accordionItem.classList.contains('accordion-list__item--opened')) { //проверка
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'; //стиль для контента и его высота увеличивается если он открыт 
            } else {
                accordionContent.style.maxHeight = null; //иначе если класса нет, то мы обнуляем
            }

        })

    })

    //Cлайдер / Gallery / https://swiperjs.com

    new Swiper('.gallery__slider', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.gallery__next',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3,
            },
            801: {
                spaceBetween: 32,
            },
            1101: {
                slidesPerView: 4,
            }
        }
    });

    //Слайдер / Отзыв

    new Swiper('.testimonials__slider', {

        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            },
        }

    });

    //Маска телефона
    const telInputs = document.querySelectorAll ('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)



})()
