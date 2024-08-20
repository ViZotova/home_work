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

    const tabControls = document.querySelector('.tab-controls') 
    tabControls.addEventListener('click', toggleTab)
    function toggleTab(e) { 
        const tabControl = e.target.closest('.tab-controls__link')  

        if (!tabControl) return 
        e.preventDefault() 
        if (tabControl.classList.contains('tab-controls__link--active')) return 
        

        const tabContentID = tabControl.getAttribute('href') 
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')


        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if(activeContent) {
            activeContent.classList.remove('tab-content--show') 
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')
    }



// ==========ACCOR=========

const tabControl = document.querySelectorAll('.tab-controls__media');
const tabContents = document.querySelectorAll('.about__slide-media');

tabControl.forEach((tab, index) => {
    tab.addEventListener('click', () => {
    tabContents.forEach(content => content.classList.remove('active'));

    tabContents[index].classList.add('active');
    tabControl.forEach(t => t.classList.remove('tab-controls__media--active'));
    tab.classList.add('tab-controls__media--active');
    });
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

function updateSlider(slideElement, index) {
    const imgElement = slideElement.querySelector('.active-image');
    imgElement.src = images[index];

    const pagination = slideElement.querySelector('.pagination');
    pagination.innerHTML = ''; 
    images.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = idx === index ? 'active' : '';
        dot.onclick = () => {
            currentIndex = idx; 
            updateAllSlides(); 
            
        };
        pagination.appendChild(dot);
    });
}

function updateAllSlides() {
    const slides = document.querySelectorAll('.image-slider__slide');
    slides.forEach(slide => updateSlider(slide, currentIndex));
}

updateAllSlides();

// Обновление слайдов по клику на изображение
const slides = document.querySelectorAll('.image-slider__slide');
slides.forEach(slide => {
    const imgElement = slide.querySelector('.active-image');
    imgElement.onclick = () => {
        currentIndex = (currentIndex + 1) % images.length; // 
        updateAllSlides(); 
    };
});


    // Инициализация Swiper
const swiper = new Swiper('.image-slider', {
    slidesPerView: 1,
    // Arrow
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    on: {
        slideChange: function () {
            const currentIndex = this.realIndex + 1; 
            const totalSlides = this.slides.length; 
            document.querySelector('.project__pagination').textContent = `$\{currentIndex\}/$\{totalSlides\}`; 
        },
    },
});


const totalSlides = swiper.slides.length;
document.querySelector('.project__pagination').textContent = 1/$
{totalSlides};

// ПЕРЕКЛЮЧЕНИЕ ПО КНОПКЕ

document.addEventListener('DOMContentLoaded', () => {
        const steps = document.querySelectorAll('.calk__step1, .calk__step2, .calk__step3');
        const nextButtons = document.querySelectorAll('.next');
        const previousButtons = document.querySelectorAll('.previous');

        steps.forEach((step, index) => {
            step.style.display = index === 0 ? 'block' : 'none';
        });

        nextButtons.forEach((button, index) => {
            button.addEventListener('click', (event) => {
                event.preventDefault(); 
                if (index < steps.length - 1) {
                    steps[index].style.display = 'none'; 
                    steps[index + 1].style.display = 'block'; 
                }
            });
        });

        previousButtons.forEach((button, index) => {
            button.addEventListener('click', (event) => {
                event.preventDefault(); 
                if (index > 0) {
                    steps[index].style.display = 'none'; 
                    steps[index - 1].style.display = 'block'; 
                }
            });
        });
    });