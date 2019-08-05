new WOW().init();
// 元素对象
var objArr = [
    {
        name: "#about",
        offsetTop : 0
    },{
        name: "#map",
        offsetTop: 0
    },{
        name: "#services",
        offsetTop: 0,
    },{
        name: "#team",
        offsetTop: 0
    },{
        name: "#clinic",
        offsetTop: 0
    },{
        name: "#projects",
        offsetTop: 0
    }
];

// 导航栏样式切换
$(window).scroll(function(){
  var top = $(window).scrollTop();
    // if($(window).width() > 768) {
    //
    // }

    // 第一屏取消选中状态
    if (top < objArr[0].offsetTop) {
        $('.login>li').removeClass('active');
    }

    // 检测滚动到第几个href添加选中样式
    for (var i = 0; i < objArr.length; i++) {
        if (top >= objArr[i].offsetTop) {
            $('.login li').removeClass('active');
            $('.login li').eq(i).addClass('active')
        }
    }

  // 更换logo图标
    $('#goToTop').hide()
  if(top>1){
	  $('.header_top').addClass('headerChange')
      changeFun($('.logoActive'),$('.logoDefulat'))
      $('#goToTop').show()
  }else if(top<1){
    $('.header_top').removeClass('headerChange')
      changeFun($('.logoDefulat'), $('.logoActive'))
      $('#goToTop').hide()

  }

});
// 导航栏切换
$('.navbar-toggle').click(function () {
    $('.header_top').addClass('headerChange')
    changeFun($('.logoActive'),$('.logoDefulat'),)
    // 判断
    var _this = $(this);
    if ($(".navbar-collapse").hasClass("in")) {
        _this.removeClass("navbar-toggle-open");
    } else {
        _this.addClass("navbar-toggle-open");
        window.onscroll = function() {
            _this.removeClass("navbar-toggle-open");
            $(".navbar-collapse").removeClass("in");
        };
    }
})

// 锚点链接
$(".login>li a, #goHref, #next").click(function () {
    var marTop = parseInt($($(this).attr("href")).css('margin-top'));
    if($(window).width() > 1024){
        marTop = marTop == 0 ? 70 : marTop;
    }else{
        marTop = marTop == 0 ? 50 : marTop + 50;
    }

    $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top - marTop+ "px"}, 500);
    $('.login>li').removeClass('active')
    $(this).parent().addClass('active')
    return false;
});

// SERVICES 鼠标移入移出变换图片
$('.serItem').hover(function(e){
    $(this).find("img[class^=serItemIcon]").eq(0).hide()
	$(this).find("img[class^=serItemIcon]").eq(1).show()
  },function(){
    $(this).find("img[class^=serItemIcon]").eq(0).show()
	$(this).find("img[class^=serItemIcon]").eq(1).hide()
  });

$(document).ready(function() {
    var _uat=navigator.userAgent;
    function fn() {
        $("body").niceScroll({cursorborder:"",cursorcolor:"rgba(0,0,0,0)",boxzoom:false});
    }
    // 兼容性判断
    if($(window).width()>768){
        if(_uat.indexOf("Firefox")>0){
            fn();
        }else{
            window.addEventListener('touchmove', fn, { passive: false })
        }
    }

    // swiper
    var swiper = new Swiper('.swiper-container', {
        autoplay:{
            delay: 20000
        },
        loop: true,
        speed: 800,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
        }
    });

    // 计算元素的OffsetTop
    for (var i=0; i<objArr.length; i++){
        scrollHref(objArr[i].name, i)
    }
});

// 置顶
$('#goToTop').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, {
        duration: 1000,
    });
})

/**
 * 切换logo
 * @param obj1  默认logo
 * @param obj2 fixed时Logo
 */
function changeFun(obj1,obj2){
    obj1.show()
    obj2.hide()
}

/**
 * 计算每块的offsetTop
 * @param obj 元素对象
 * @param i   索引值
 */
function scrollHref(obj, i) {
    var offsetTop = $(obj).offset().top;
    var marTop = parseInt($(obj).css('margin-top'));
    var top = offsetTop - marTop - 100;
    objArr[i].offsetTop = parseInt(top);
}
