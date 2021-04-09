$(window).scroll(function () {
    var alamin = $(this).scrollTop();
    if (alamin > 100) {
        $('.navbar').addClass('add');
    } else {
        $('.navbar').removeClass('add');
    }
    // Slick Slider For Bennar Text
   $('.text-slider').slick({

    autoplay:true,
    autoplaySpeed:2000,
    infinite: true,
        arrows: false,
        infinite: true,
        fade:true,
        speed: 300,

   })
      
    // Slick Slider For about Part
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,

        // For responsive
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                infinite: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1

            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1

            }
        }
    ]
    });

    // Slick Slider For Recent post
    $('.autoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: ('.left_arr'),
        nextArrow: ('.right_arr'),
        autoplaySpeed: 1500,

// For responsive
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
// MIXitup-3 JS
var amin = document.querySelector('.project_group');
var alamin = mixitup(amin);



$(document).ready(function () {
    $('.venobox').venobox();
});

$(function () {
    // Counter UP
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

});