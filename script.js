$(document).ready(function () {
    var sound = document.getElementById('ad-sound');

    $('#cr-yr').html(new Date().getFullYear());
    $('#main-slider__container').pagepiling({
        menu: '#main-header',
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['Home', 'Work', 'About', 'Contact']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function (index, nextIndex, direction) { 
            ScrollReveal({ reset: true });
        },
        afterLoad: function (anchorLink, index) { },
        afterRender: function () { }
    });

    // Flyout menu toggle
    $('.js-menu-label-open').click(()=> {
        $('.js-menu-trigger').addClass('is-active');
        $('.flyout-menu__container').addClass('is-open');
        $('body').addClass('overflow-hidden');
        $('.main-menu__flyout').addClass('d-block');
        ScrollReveal().reveal('.is-open .social-links', { delay: 1000 });
        ScrollReveal().reveal('.is-open .primary-links', { delay: 2000 });
        sound.play()
    });
    $('.js-menu-label-close, .primary-links__item').click(()=> {
        $('.js-menu-trigger').removeClass('is-active');
        $('.flyout-menu__container').removeClass('is-open');
        $('body').removeClass('overflow-hidden');
        $('.main-menu__flyout').removeClass('d-block');
        sound.play()
    });


    // Scroll Revels

    ScrollReveal().reveal('.page-logo', { reset: true });
    ScrollReveal().reveal('.menu-link ', { reset: true });
    ScrollReveal().reveal('.js-header__title, .about-heading__title, .contact-heading__title', { delay: 500, reset: true });
    ScrollReveal().reveal('.stripe-1, .stripe-2, .stripe-3, .stripe-4', { delay: 600, reset: true });
    ScrollReveal().reveal('.page-header__lede, .scroll-container', { delay: 2000, reset: true });
    ScrollReveal().reveal('.js-work-structure__title', { delay: 2100, reset: true });
    ScrollReveal().reveal('.js-handson__title-heading, .skills__container, .worked-with__container', { delay: 500, reset: true });
    ScrollReveal().reveal('.js-handson__detail, .my-work__wrapper, .contact-social__links', { delay: 500, reset: true });
});

function navigateTo(index){
    $('#main-slider__container').pagepiling.moveTo(index);
}


// Practicles
particlesJS("particles-container", {
    "particles": {
        "number": {
            "value": 34,
            "density": {
                "enable": true,
                "value_area": 1122.388442605866
            }
        },
        "color": {
            "value": "#f0f0f0"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 4,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 4
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.14204657549380909,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1.3586413586413588,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3.945738208161363,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 88.7112887112887,
                "size_min": 7.992007992007992,
                "sync": true
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 410.35677364878177,
            "color": "#0c0c0c",
            "opacity": 0.4,
            "width": 0.4734885849793636
        },
        "move": {
            "enable": true,
            "speed": 3.1565905665290903,
            "direction": "bottom",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 552.4033491425909
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 275.7242757242757,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});




