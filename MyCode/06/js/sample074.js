(function ($) {
    $('div').on('click', function (event) {
        // Attach click handler to <div>     
        alert('You clicked the outer div');
    });

    $('span').on('click', function (event) {
        // Attach click handler to <span>     
        alert('You clicked a span inside of a div element');
        // Stop click on <span> from propagating to <div>
        // if you comment out the line below, 
        //the click event attached to the div will also be invoked
        event.stopPropagation();
    });
})(jQuery);