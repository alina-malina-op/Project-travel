$(function () {

    //кнопка up
    var btn = $('#button');  
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault(); //убирает действия, например переход на другую стр как ссылка
        $('html, body').animate({ scrollTop: 0 }, '300'); /*вверх*/
    });

    $('.slider_inner, .news_slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });

    $('select').styler();
    
    //меню
    $('.header_btn-menu').on('click', function (e) {
        e.preventDefault();
        $('.menu ul').slideToggle();
    });
    
    // $('.menu ul').on('click', function (e) {
    //     e.preventDefault();
    //     $('.menu ul').slideToggle();
    // });
    
    //плавная прокрутка
    $("a.scrollto").click(function() {
        var elementClick = $(this).attr("href") //в переменной elementClick метод attr забирает значение атрибута href
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
          scrollTop: destination
        }, 800); //скорость прокрутки
        return false; //без клика не срабатывает
      });

});
