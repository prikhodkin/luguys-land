$('.menu__btn').click(() => {
    $('.menu__hamburger').toggleClass('menu__hamburger--active');
    $('.menu').toggleClass('menu--closed');
    $('.menu').toggleClass('menu--open');
});

document.addEventListener('scroll', () => {
    if (window.pageYOffset >= $('.header').outerHeight()){
        $('.menu').removeClass('menu--desktop');
        $('.menu__btn').removeClass('menu__btn--opacity');
    } else {
        $('.menu').addClass('menu--desktop');
        $('.menu__btn').addClass('menu__btn--opacity');
    }
});