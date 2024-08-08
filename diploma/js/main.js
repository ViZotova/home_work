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

    // //Маска телефона
    // const telInputs = document.querySelectorAll ('input[type="tel"]')
    // const im = new Inputmask('+7 (999) 999-99-99')
    // im.mask(telInputs)


//Cлайдер / Gallery / https://swiperjs.com

    // Инициализация Swiper
    new Swiper('.image-slider', {
        slidesPerView: 1,
        //Arrow
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });


// CLIC 

const images = [
    "images/decor/Rectangle2-2.jpg",
    "images/decor/Rectangle2-3.jpg",
    "images/decor/Rectangle2-4.jpg",
    "images/decor/Rectangle2-5.jpg",
    "images/decor/Rectangle2.jpg"
];

let currentIndex = 0;

// Функция для обновления изображения и пагинации
function updateSlider(slideElement, index) {
    const imgElement = slideElement.querySelector('.active-image');
    imgElement.src = images[index];

    // Обновить пагинацию
    const pagination = slideElement.querySelector('.pagination');
    pagination.innerHTML = ''; // Очистка текущей пагинации
    images.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = idx === index ? 'active' : '';
        dot.onclick = () => updateSlider(slideElement, idx);
        pagination.appendChild(dot);
    });
}

// Инициализация слайдеров
const slides = document.querySelectorAll('.image-slider__slide');
slides.forEach(slide => updateSlider(slide, currentIndex));

// Обработчик клика на изображениях для смены
slides.forEach(slide => {
    const imgElement = slide.querySelector('.active-image');
    imgElement.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(slide, currentIndex);
    };
})

// Инициализация слайдера
updateSlider(currentIndex);

// Обработчик клика на изображении для перехода к следующему
document.getElementById('active-image').onclick = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider(currentIndex);
};


    // BUTTON

// const button = document.querySelector(".calk__box-link");
// button.addEventListener("click", () => {
//     button.classList.add("button--active");
// });