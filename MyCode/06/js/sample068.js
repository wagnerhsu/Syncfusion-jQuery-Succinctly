(function ($) {
    $(window).on('resize', function () { alert('I have no namespace'); });

    $(window).on('resize.unique', function () { alert('I have a unique namespace'); });

    // Removes only the resize.unique function from event handler 
    $(window).off('resize.unique')
})(jQuery); 