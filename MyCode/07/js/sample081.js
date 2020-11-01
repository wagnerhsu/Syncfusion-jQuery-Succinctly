(function ($) {
    $('.next')
        .on('click',function () { $('html, body').animate({ scrollTop: $(this).parent().next().find('a').offset().top }, 1000); });
    $('.prev')
        .on('click',function () { $('html, body').animate({ scrollTop: $(this).parent().prev().find('a').offset().top }, 1000); });
})(jQuery);