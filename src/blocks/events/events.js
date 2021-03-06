$('.events__list').slick({
    'dots': true,
    'infinite': true,
    'speed': 300,
    'slidesToShow': 4,
    'slidesToScroll': 1,
    'responsive': [
        {
            'breakpoint': 1400,
            'settings': {
                'slidesToShow': 3,
                'slidesToScroll': 1,
                'infinite': true,
                'dots': true,
                'arrows': true
            }
        },
        {
            'breakpoint': 1024,
            'settings': {
                'slidesToShow': 2,
                'slidesToScroll': 1,
                'infinite': true,
                'dots': true,
                'arrows': false
            }
        },
        {
            'breakpoint': 600,
            'settings': {
                'slidesToShow': 1,
                'slidesToScroll': 1,
                'arrows': false
            }
        },
        {
            'breakpoint': 480,
            'settings': {
                'slidesToShow': 1,
                'slidesToScroll': 1,
                'arrows': false
            }
        }
    ]
});


