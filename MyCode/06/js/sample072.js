(function ($) {
    // Responds to multiple events 
    $(document).on('click keypress resize', function (event) { alert('A click, keypress, or resize event occured on the document.'); });
})(jQuery);