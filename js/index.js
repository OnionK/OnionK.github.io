window.onload = function() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:true,


        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

    });

return mySwiper;

};
$(window).scroll(function(){
    if($(this).scrollTop() > 500) {
        $(".scroll-to-top").fadeIn(400);

    } else {
        $(".scroll-to-top").fadeOut(400);
    }
});

$(".scroll-to-top").on('click', function(event){
    event.preventDefault();
    $("html, body").animate({scrollTop: 0},1000);
});



/*
$('.gallery li a').hover(function(e){
    e.preventDefault();
    $(this).parent().parent().find('a').removeClass('active');
    $(this).addClass('active');
});
*/
