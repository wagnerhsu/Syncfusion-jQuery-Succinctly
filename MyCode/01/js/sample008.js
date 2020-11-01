jQuery(function ($) {
    $('#list') // Original wrapper set     
        .find('> li') // Destructive method         
            .filter(':last') // Destructive method             
            .addClass('last')
        .end() // End .filter(':last')         
        .find('ul') // Destructive method             
            .css('background', '#ccc')
            .find('li:last') // Destructive method                     
                .addClass('last')
            .end() // End .find('li:last')         
        .end() // End .find('ul')     
    .end() // End .find('> li') 
    .find('li') // Back to the orginal $('#list')     
    .append('I am an &lt;li&gt;');
})(jQuery);