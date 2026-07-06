document.addEventListener('DOMContentLoaded', () => {
    const heroSwiper = new Swiper('.hero-slider', {
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.hero-controls .btn-next',
            prevEl: '.hero-controls .btn-prev',
        },
        on: {
            init(swiper) {
                restartHeroMotion(swiper);
            },
            slideChangeTransitionStart(swiper) {
                restartHeroMotion(swiper);
            },
        },
    });

    function restartHeroMotion(swiper) {
        swiper.slides.forEach((slide) => {
            slide.classList.remove('motion-on');
        });

        requestAnimationFrame(() => {
            swiper.slides[swiper.activeIndex].classList.add('motion-on');
        });
    }

    void heroSwiper;

    // Top button smooth scroll (0.3s)
    const btnTop = document.querySelector('.btn-top');
    if (btnTop) {
        btnTop.addEventListener('click', (e) => {
            e.preventDefault();
            const duration = 300; // 0.3s
            const start = window.scrollY || window.pageYOffset;
            const startTime = performance.now();

            function scrollAnimation(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);

                // easeInOutQuad easing
                const ease = progress < 0.5 
                    ? 2 * progress * progress 
                    : -1 + (4 - 2 * progress) * progress;

                window.scrollTo(0, start * (1 - ease));

                if (progress < 1) {
                    requestAnimationFrame(scrollAnimation);
                }
            }

            requestAnimationFrame(scrollAnimation);
        });
    }
});
