//= "../blocks/menu/menu.js"
//= "../blocks/promo/promo.js"
//= "../blocks/best-tour/best-tour.js"
//= "../blocks/reviews/reviews.js"
//= "../blocks/slider/slider.js"
//= "../blocks/events/events.js"
//= "../blocks/tours/tours.js"
//= "../blocks/services/services.js"
//= "../blocks/page-tour/page-tour.js"
$(function(){
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
});