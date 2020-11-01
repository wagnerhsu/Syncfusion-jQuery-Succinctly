jQuery(function ($) { // Pass jQuery a function   
    // Pass jQuery a string of HTML 
    $('<p></p>').appendTo('body');
    // Pass jQuery an element reference 
    $(document.createElement('a')).text('jQuery').appendTo('p');
    // Pass jQuery a CSS expression 
    $('a:first').attr('href', 'http://www.jquery.com');
    // Pass jQuery DOM reference 
    $(document[0]).attr('jQuery');
});