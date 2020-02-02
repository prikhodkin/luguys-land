const slider = $('.tours__list');
slider
    .on('init', () => {
        mouseWheel(slider);
    })
    .slick({
        'dots': true,
        'vertical': true,
        'arrows': false,
        'verticalSwiping': true,
        'infinite': false,
        'accessibility': false
    });

function mouseWheel(slider) {
    $(window).on('wheel', { 'slider': slider }, mouseWheelHandler);
}

function mouseWheelHandler(event) {
    const slider = event.data.slider;
    const delta = event.originalEvent.deltaY;
    if (delta > 0) {
        slider.slick('slickNext');

    } else {
        slider.slick('slickPrev');
    }
}
const sliderItems = document.querySelectorAll('.tours__item');
const dots = document.querySelectorAll('.slick-dots button');

const showNavIcon = () => {
  sliderItems.forEach((item,index) => {
    const navItems = item.querySelectorAll('.tours__nav-item');
    const currentSlide = $('.tours__list').slick('slickCurrentSlide');
    navItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        dots[index].click();
      })
      if (index === currentSlide) {
        item.classList.add('tours__nav-item--active');
      } else {
        item.classList.remove('tours__nav-item--active');
      }
    });
  });
}




showNavIcon();
window.addEventListener('wheel', () => {
  showNavIcon();
})

window.addEventListener('click', () => {
  showNavIcon();
})

window.addEventListener('touchend', () => {
  showNavIcon();
})