// //БУРГЕР
function burgerMenu (selector) {
    const menu = $(selector);
    const button = menu.find('.burger-menu__button');
    const links = menu.find('.burger-menu__link');
    const overlay = menu.find('.burger-menu__overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu()); 
    
    function toggleMenu() {
        menu.toggleClass('burger-menu-active');

        if (menu.hasClass('burger-menu-active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}
burgerMenu('.header__block');

//TABS

    // const tabItem = document.querySelectorAll('.tab__item');
    // const aboutContent = document.querySelectorAll('.about__content');

    // for (let item of tabItem) {
    //     item.addEventListener('click', function() {

    //         for(let element of aboutContent) {
    //             element.classList.add('hidden')
    //         }
    //         const content = document.querySelector('#' + item.dataset.tab)
    //         content.classList.remove('hidden')
    //     }) 
    // }

    const tabControls = document.querySelector('.tab-conrols') 
    tabControls.addEventListener('click', toggleTab)
    function toggleTab(e) { 
        const tabControl = e.target.closest('.tab-conrols__link')  

        if (!tabControl) return 
        e.preventDefault() 
        if (tabControl.classList.contains('tab-conrols__link--active')) return 
        

        const tabContentID = tabControl.getAttribute('href') 
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-conrols__link--active')
        const activeContent = document.querySelector('.tab-content--show')


        if (activeControl) {
            activeControl.classList.remove('tab-conrols__link--active')
        }
        if(activeContent) {
            activeContent.classList.remove('tab-content--show') 
        }

        tabControl.classList.add('tab-conrols__link--active')
        tabContent.classList.add('tab-content--show')
    }


      //Модальное окно
    const modal = document.querySelector('.modal') 
    const modalButton = document.querySelector('.header__button')

    modalButton.addEventListener('click', openModal) 
    modal.addEventListener('click', closeModal) //

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) { 
        e.preventDefault()
        const target = e.target 
        if (target.closest('.modal__cancel') || target.classList.contains('modal')) { 

            document.body.classList.remove('body--opened-modal')
        }
    }


    //Маска телефона
    const telInputs = document.querySelectorAll ('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)


//Cлайдер / Gallery / https://swiperjs.com


    new Swiper('.directional_nav', {

        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction',
        },

        navigation: {
            nextEl: '.next_btn',
            prevEl: '.previous_btn',
        },

        breakpoints: {
            1440: {
                slidesPerView: 1,
            }
        }
    });
