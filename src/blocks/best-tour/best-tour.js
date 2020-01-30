$('.best-tour__list').slick({
    'dots': true,
    'infinite': true,
    'speed': 300,
    'slidesToShow': 4,
    'slidesToScroll': 4,
    'adaptiveHeight': true,
    'responsive': [
        {
            'breakpoint': 1024,
            'settings': {
                'slidesToShow': 3,
                'slidesToScroll': 3,
                'infinite': true,
                'dots': true,
                'arrows': false
            }
        },
        {
            'breakpoint': 600,
            'settings': {
                'slidesToShow': 2,
                'slidesToScroll': 2,
                'dots': true,
                'arrows': false
            }
        },
        {
            'breakpoint': 480,
            'settings': {
                'slidesToShow': 1,
                'slidesToScroll': 1,
                'dots': true,
                'arrows': false
            }
        }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});