(function ($) {
    // Using DOM node properties to set the title attribute      
    $('a').get(0).title = 'jQuery.com';
    // Manipulation of DOM element using jQuery methods      
    $('a').attr('href', 'http://www.jquery.com');
})(jQuery);
