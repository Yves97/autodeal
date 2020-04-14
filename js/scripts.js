/* <- Preloader -> */
$(window).on('load',function(){
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
    $('body').delay(1000).css({'overflow':'visible'})
})

$(document).ready(function(){
    /*<- js slick ->*/
    $('#slider-cars').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [
            {
            breakpoint: 768,
            settings: {slidesToShow: 4}
            }, 
            {
            breakpoint: 520,
            settings: {slidesToShow: 3}
            },
            {
                breakpoint: 377,
                settings: {slidesToShow:1}
            },
            {
                breakpoint: 415,
                settings: {slidesToShow:1}
            }
        ]
    });
    /****************************************/

    /*<-typed js->*/
    let typed = new Typed('.type',{
        strings: 
            ['BIENVENUE CHEZ LUXURY AUTO DEAL'],
            typeSpeed:90,
            backSpeed:false,
            showCursor: false,
            smartBackspace: true,
            loop:true
        });
});

