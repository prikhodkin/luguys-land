$('.page-tour__slider-list').slick({
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false
      }
    }
  ]
});

const targets = document.querySelectorAll('.flextabs');
for (let i = 0; i < targets.length; i ++) {
  let tabs = flextabs(targets[i]);
  tabs.init();
}