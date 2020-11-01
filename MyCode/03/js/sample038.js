(function ($) {
    $('img').attr('src', 'http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif').filter(function () { return !$(this).parent('p').length == 1 }).wrap('<p></p>');
})(jQuery); 