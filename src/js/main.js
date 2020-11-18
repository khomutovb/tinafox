//include('alert.js')
$(document).ready(function () {
    $(".catalog__btn").hover(
        function () {
            $(".overlay-catalog").addClass("active")
            $(".header-bottom").addClass("border")
        }, function () {
            $(".overlay-catalog").removeClass("active")
            $(".header-bottom").removeClass("border")
        }
    );
    $(".menu-toggle__close").click(function () {
        $(".menu-toggle").removeClass("active")
        $(".menu-toggle__inner").removeClass("active")
        $("body").removeClass("overflow")
    });
    $(".product__buy").click(function () {
        $(".cart").addClass("active")
        $(".cart__inner").addClass("active")
        $("body").addClass("overflow")
    });
    $(".cart__close").click(function () {
        $(".cart").removeClass("active")
        $(".cart__inner").removeClass("active")
        $("body").removeClass("overflow")
    });
    if ($("#menu-toggle").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.menu__btn').length || $(e.target).hasClass('menu-toggle')) {
                $("body").toggleClass('overflow')
                $(".menu-toggle").toggleClass('active')
                $(".menu-toggle__inner").toggleClass('active')
            }
        })
    }
    if ($("#cart").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.icon-cart__container, .product__buy__btn').length || $(e.target).hasClass('cart')) {
                $("body").toggleClass('overflow')
                $(".cart").toggleClass('active')
                $(".cart__inner").toggleClass('active')
            }
            if ($(e.target).closest('.remove_item').length) {
                $(e.target).closest('.cart__order_item').fadeOut(500)
                setTimeout(function () {
                    $(e.target).closest('.cart__order_item').remove()
                }, 1000);
            }
        })
    }
    if ($("#search").length) {

        $(document).on('click', function (e) {
            if ($(e.target).closest('.search-btn').length || $(e.target).hasClass('search')) {
                $("body").toggleClass('overflow')
                $(".search").toggleClass('active')
                $(".search__inner").toggleClass('active')
            }
        })
    }
    $(document).on('click', '.counter', function (e) {
        if ($(e.target).closest('.counter')) {
            const input = $(e.target).closest('.counter').find('input')[0];

            if ($(e.target).closest('.counter_subtract').length && input.value > 1) {
                input.value = --input.value;
                $(input).trigger('change');
            }
            if ($(e.target).closest('.counter_add').length) {
                input.value = ++input.value;
                $(input).trigger('change');
            }
        }
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        speed: 900,
        useTransform: true,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                }
            },
        ]
    });
    var SLIDES_TO_SHOW;
    var $window_width = $(window).width();
    if ($window_width > 1200) {
        SLIDES_TO_SHOW = 4;
    }
    else if ($window_width >= 700 && $window_width < 1200) {
        SLIDES_TO_SHOW = 2;
    }
    else if ($window_width < 700) {
        SLIDES_TO_SHOW = 1;
    }
    window.addEventListener('resize', function (event) {
        var $window_width = $(window).width();
        if ($window_width > 1200) {
            SLIDES_TO_SHOW = 4;
        }
        else if ($window_width >= 700 && $window_width < 1200) {
            SLIDES_TO_SHOW = 2;
        }
        else if ($window_width < 700) {
            SLIDES_TO_SHOW = 1;
        }
    });
    $(".bestsellers-slider .product__list").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
        let numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);
        $(".bestsellers .slides-num").html(`<span>0${page}</span><span class="num__all">/ 0${numPages}</span>`);
    });
    $(".bestsellers-slider .product__list").slick({
        slidesToShow: 5,
        slidesToScroll: SLIDES_TO_SHOW,
        dots: false,
        focusOnSelect: false,
        arrows: true,
        nextArrow: '.bestsellers .next_arrow',
        prevArrow: '.bestsellers .previous_arrow',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            }
        ]
    });
    var SLIDES_TO_SHOW_BRAND;
    var slidesBrandFunc = function () {
        var $window_width = $(window).width();
        if ($window_width > 992) {
            SLIDES_TO_SHOW_BRAND = 7;
        }
        else if ($window_width >= 700 && $window_width < 992) {
            SLIDES_TO_SHOW_BRAND = 4;
        }
        else if ($window_width < 700) {
            SLIDES_TO_SHOW_BRAND = 2;
        }
    };
    slidesBrandFunc();
    $(window).resize(slidesBrandFunc);
    $(".brand .brand__list").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW_BRAND);
        let numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW_BRAND);
        $(".brand .slides-num").html(`<span>0${page}</span><span class="num__all">/ 0${numPages}</span>`);
    });
    $(".brand .brand__list").slick({
        slidesToShow: 8,
        slidesToScroll: SLIDES_TO_SHOW_BRAND,
        dots: false,
        arrows: true,
        nextArrow: '.brand .next_arrow',
        prevArrow: '.brand .previous_arrow',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
    $(".sale-slider .product__list").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
        let numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);
        $(".sale .slides-num").html(`<span>0${page}</span><span class="num__all">/ 0${numPages}</span>`);
    });
    $(".sale-slider .product__list").slick({
        slidesToShow: 5,
        slidesToScroll: SLIDES_TO_SHOW,
        dots: false,
        arrows: true,
        nextArrow: '.sale .next_arrow',
        prevArrow: '.sale .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            }
        ]
    });
    $(".reviews__home-slider .product__list").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
        let numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);
        $(".reviews__home .slides-num").html(`<span>0${page}</span><span class="num__all">/ 0${numPages}</span>`);
    });
    $(".reviews__home-slider .product__list").slick({
        slidesToShow: 5,
        slidesToScroll: SLIDES_TO_SHOW,
        dots: false,
        arrows: true,
        nextArrow: '.reviews__home .next_arrow',
        prevArrow: '.reviews__home .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    variableWidth: true,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            }
        ]
    });
    $(".analog-slider .product__list").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
        let numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);
        $(".analog .slides-num").html(`<span>0${page}</span><span class="num__all">/ 0${numPages}</span>`);
    });
    $(".analog-slider .product__list").slick({
        slidesToShow: 5,
        slidesToScroll: SLIDES_TO_SHOW,
        dots: false,
        arrows: true,
        nextArrow: '.analog .next_arrow',
        prevArrow: '.analog .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            }
        ]
    });
    $(".reviews__category-slider .product__list").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
        let numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);
        $(".reviews__category .slides-num").html(`<span>0${page}</span><span class="num__all">/ 0${numPages}</span>`);
    });
    $(".reviews__category-slider .product__list").slick({
        slidesToShow: 5,
        slidesToScroll: SLIDES_TO_SHOW,
        dots: false,
        arrows: true,
        nextArrow: '.reviews__category .next_arrow',
        prevArrow: '.reviews__category .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            }
        ]
    });
    $(".recently_watch-slider .product__list").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
        let numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);
        $(".recently_watch .slides-num").html(`<span>0${page}</span><span class="num__all">/ 0${numPages}</span>`);
    });
    $(".recently_watch-slider .product__list").slick({
        slidesToShow: 5,
        slidesToScroll: SLIDES_TO_SHOW,
        dots: false,
        arrows: true,
        nextArrow: '.recently_watch .next_arrow',
        prevArrow: '.recently_watch .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            }
        ]
    });
    $(".similar-slider .product__list").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
        let numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);
        $(".similar .slides-num").html(`<span>0${page}</span><span class="num__all">/ 0${numPages}</span>`);
    });
    $(".similar-slider .product__list").slick({
        slidesToShow: 5,
        slidesToScroll: SLIDES_TO_SHOW,
        dots: false,
        arrows: true,
        nextArrow: '.similar .next_arrow',
        prevArrow: '.similar .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            }
        ]
    });
    $(".related-slider .product__list").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
        let numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);
        $(".related .slides-num").html(`<span>0${page}</span><span class="num__all">/ 0${numPages}</span>`);
    });
    $(".related-slider .product__list").slick({
        slidesToShow: 5,
        slidesToScroll: SLIDES_TO_SHOW,
        dots: false,
        arrows: true,
        nextArrow: '.related .next_arrow',
        prevArrow: '.related .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            }
        ]
    });
    $(".viewed-slider .product__list").on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        let page = Math.ceil(((currentSlide || 0) + 1) / SLIDES_TO_SHOW);
        let numPages = Math.ceil(slick.slideCount / SLIDES_TO_SHOW);
        $(".viewed .slides-num").html(`<span>0${page}</span><span class="num__all">/ 0${numPages}</span>`);
    });
    $(".viewed-slider .product__list").slick({
        slidesToShow: 5,
        slidesToScroll: SLIDES_TO_SHOW,
        dots: false,
        arrows: true,
        nextArrow: '.viewed .next_arrow',
        prevArrow: '.viewed .previous_arrow',
        focusOnSelect: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: SLIDES_TO_SHOW,
                }
            }
        ]
    });
    $(".product-slider").slick({
        slidesToShow: 1,
        infinite: true,
        dots: true,
        arrows: true,
        cssEase: 'linear',
        customPaging: function (slick, index) {
            var image = $(slick.$slides[index]).find('.slider__img').attr('src');
            return '<img src="' + image + '" alt="" /> '
        }
    });
    $(document).on('click', '.slick-cloned', function (e) {
        var $slides = $(this)
            .parent()
            .children('.slick-slide:not(.slick-cloned)');

        $slides
            .eq(($(this).attr("data-slick-index") || 0) % $slides.length)
            .trigger("click.fb-start", { $trigger: $(this) });

        return false;
    });
    $(".breadcrumb-item").eq(-2).addClass("prev");
});