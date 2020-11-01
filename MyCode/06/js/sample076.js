(function ($) {
    $('div').on('myCustomEvent', function () {
        // Bind a custom event to <div>     
        window.location = 'http://www.jquery.com';
    });
    $('div').on('click',function () {
        // Click the <div> to invoke the custom event     
        $(this).trigger('myCustomEvent');
    })
})(jQuery); 