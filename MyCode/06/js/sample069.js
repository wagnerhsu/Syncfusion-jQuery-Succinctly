(function ($) {
    $('a').on('click',
        function () { alert('You clicked me') });
    $('a').on('click.unique',
        function () { alert('You Trigger click.unique') });  // Invoke the function passed to click.unique 
    $('a').trigger('click.unique');
})(jQuery); 