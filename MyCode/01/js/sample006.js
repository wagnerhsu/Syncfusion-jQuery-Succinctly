jQuery(function ($) {
    $('a').text('jQuery') // Sets text to jQuery and then returns $('a')     
        .attr('href', 'http://www.jquery.com/') // Sets the href attribute and then returns $('a')     
        .addClass('jQuery'); // Sets class and then returns $('a') 
})(jQuery)