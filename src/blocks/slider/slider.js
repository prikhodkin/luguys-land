$('.fancybox').fancybox({
    'padding': 0,
    'openEffect': 'elastic'
});

$('.slider__list').slick({
    'dots': false,
    'arrows': true,
    'centerMode': true,
    'centerPadding': '25%',
    'responsive': [
        {
            'breakpoint': 778,
            'settings': {
                'arrows': false,
                'centerMode': true,
                'centerPadding': '100px',
                'slidesToShow': 1
            }
        },
        {
            'breakpoint': 480,
            'settings': {
                'arrows': false,
                'centerMode': true,
                'centerPadding': '40px',
                'slidesToShow': 1
            }
        }
    ]
});