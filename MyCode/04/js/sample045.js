(function ($) {
    // Alert index of the clicked div amongst all div's in the wrapper set 
    $('#nav div').on("click", function () {
        console.log($('#nav div').index(this));
        // or, nice trick...     
        console.log($(this).prevAll().length);
    });
})(jQuery); 