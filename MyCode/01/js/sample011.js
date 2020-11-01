(function ($) {
    $('a').each(function () {
        // Loop that alerts the id value for every <a> in the page         
        alert($(this).attr('id')); // "this" refers to the current element in the loop     
    });
})(jQuery);