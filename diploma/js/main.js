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
        },
        //Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
    });


const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

swiper.on('slideChange', function () {
    console.log('Слайд изменен: ' + swiper.activeIndex);
})

// CLIC
// function changeImg () {
//     let image = document.getElementById ('img1');

//     if(image.src.match('images/decor/Rectangle2.jpg')) {
//         image.src = 'images/decor/Rectangle2-2.jpg'
//     } else {
//         image.src = 'images/decor/Rectangle2.jpg'
//     }
// }

let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;
let currentIndex4 = 0;
let currentIndex5 = 0;

const images1 = [
    'images/decor/Rectangle2.jpg', 
    'images/decor/Rectangle2-2.jpg', 
    'images/decor/Rectangle2-3.jpg',
    'images/decor/Rectangle2-4.jpg',
    'images/decor/Rectangle2-5.jpg',
    'images/decor/Rectangle2-5.jpg',
    'images/decor/Rectangle2-5.jpg',
];
const images2 = [
    'images/decor/Rectangle2-2.jpg', 
    'images/decor/Rectangle2-2.jpg', 
    'images/decor/Rectangle2-3.jpg',
    'images/decor/Rectangle2-4.jpg',
    'images/decor/Rectangle2-5.jpg',
    'images/decor/Rectangle2-5.jpg',
    'images/decor/Rectangle2-5.jpg',
];
const images3 = [
    'images/decor/Rectangle2-3.jpg', 
    'images/decor/Rectangle2-2.jpg', 
    'images/decor/Rectangle2-3.jpg',
    'images/decor/Rectangle2-4.jpg',
    'images/decor/Rectangle2-5.jpg',
    'images/decor/Rectangle2-5.jpg',
    'images/decor/Rectangle2-5.jpg',
];
const images4 = [
    'images/decor/Rectangle2-3.jpg', 
    'images/decor/Rectangle2-2.jpg', 
    'images/decor/Rectangle2-3.jpg',
    'images/decor/Rectangle2-4.jpg',
    'images/decor/Rectangle2-5.jpg',
    'images/decor/Rectangle2-5.jpg',
    'images/decor/Rectangle2-5.jpg',
];
const images5 = [
    'images/decor/Rectangle2-3.jpg', 
    'images/decor/Rectangle2-2.jpg', 
    'images/decor/Rectangle2-3.jpg',
    'images/decor/Rectangle2-4.jpg',
    'images/decor/Rectangle2-5.jpg',
    'images/decor/Rectangle2-5.jpg',
    'images/decor/Rectangle2-5.jpg',
];

function changeImg1() {
    let image1 = document.getElementById('img1');
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    image1.src = images1[currentIndex1];
}
function changeImg2() {
    let image2 = document.getElementById('img2');
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    image2.src = images2[currentIndex2];
}
function changeImg3() {
    let image3 = document.getElementById('img3');
    currentIndex3 = (currentIndex3 + 1) % images3.length;
    image3.src = images3[currentIndex3];
}
function changeImg4() {
    let image4 = document.getElementById('img4');
    currentIndex4 = (currentIndex4 + 1) % images4.length;
    image4.src = images4[currentIndex4];
}
function changeImg5() {
    let image5 = document.getElementById('img5');
    currentIndex5 = (currentIndex5 + 1) % images5.length;
    image5.src = images5[currentIndex5];
}

    // BUTTON

// const button = document.querySelector(".calk__box-link");
// button.addEventListener("click", () => {
//     button.classList.add("button--active");
// });
