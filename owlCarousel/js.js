$('.ourNewCarousel').owlCarousel({
    loop: true,
    items:1,
    autoplay:true,
    animateOut: 'fadeOut'
});


$('.ourSecondCarousel').owlCarousel({
    margin: 20,
    loop: true,
    nav: true,
    autoplay:true,
    autoplayTimeout:3000,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        520:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true
        }

    }
});