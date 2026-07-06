const li1 = document.querySelector('.main .con2 ul li:first-child');
const li2 = document.querySelector('.main .con2 ul li:last-child');
const str1 = document.querySelector('.main .con2 ul li:first-child strong');
const str2 = document.querySelector('.main .con2 ul li:last-child strong');
const con2 = document.querySelector('.main .con2');

if (li1 && li2 && str1 && str2 && con2) {
    li1.addEventListener('mouseenter', function () {
        con2.style.backgroundImage = `url('./images/mainCon1_bg.jpg')`;
        str1.textContent = `상설전시`;
    });

    li2.addEventListener('mouseenter', function () {
        con2.style.backgroundImage = `url('./images/mainCon2_bg.jpg')`;
        str2.textContent = `특별전시`;
    });
}

const heroSwiper = new Swiper('.hero-swiper', {
    loop: true,
    speed: 800,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.hero-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.hero-next',
        prevEl: '.hero-prev',
    },
});

const heroPause = document.querySelector('.hero-pause');
let heroPlaying = true;

if (heroPause) {
    heroPause.addEventListener('click', function () {
        if (heroPlaying) {
            heroSwiper.autoplay.stop();
            heroPause.innerHTML = '<i class="xi-play"></i>';
        } else {
            heroSwiper.autoplay.start();
            heroPause.innerHTML = '<i class="xi-pause"></i>';
        }

        heroPlaying = !heroPlaying;
    });
}
