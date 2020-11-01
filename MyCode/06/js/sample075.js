(function ($) {
    $('span').on('click',function () {
        // Add click event to <span>         
        window.location = 'http://www.jquery.com';
    });
    $('a').on('click',function () {
        // Ignore clicks on <a>         
        return false;
    });
})(jQuery); 