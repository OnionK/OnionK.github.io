$(window).ready(function () {
    new WOW().init();
    $('.topBtn').hide();
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if (top > 1) {
            $('.topBtn').show();
            $('.Nav').addClass('fix');
        } else {
            $('.Nav').removeClass('fix');
            $('.topBtn').hide();
        }
    });
//置顶按钮 滚动到最顶部
    $('.topBtn').click(function () {
        $('html, body').animate({
            scrollTop:0
        },{
            duration:800,
            easing:"swing"
        })
    })

//点击a链接时的滚动动画
    $("a").click(function () {
        $("html, body").animate({scrollTop: $($(this).attr("href")).offset().top -120+ "px"}, 500);
        return false;
    });
//导航栏icon
    $(".navbar-toggle").click(function() {
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
    });


//日历切换color
    $('.calendar-logo').click(function () {
        let  type = $(this).attr('data-target');

        if ($(type).hasClass('in')){
            $(this).prev().removeClass('calendar-font');
            $(this).find('img').attr('src','../img/down.png')
        } else {
            $(this).prev().addClass('calendar-font')
            $(this).find('img').attr('src','../img/up.png')
        }
    });


    //日历样式添加
    var mydate = new Date();
    var activeDay = Number(mydate.getMonth() + 1);
    $('.calendar-Date').children().each( function(i, e){
        $(this).eq(0).addClass('data_disable');
        if ($(this).eq(0)[0].innerHTML == activeDay) {
            console.log($(this))
            $(this).eq(0).addClass('active_page calendar-font');
            $(this).eq(0).parent().prevAll().children().addClass('calendar-font');
            $(this).eq(0).parent().nextAll().children().addClass('data_disable')

        }
    })
});

