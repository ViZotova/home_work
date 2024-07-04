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
    

}) ()
