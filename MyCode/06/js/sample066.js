(function ($) {
    // Bind a click handler to all <a> and immediately invoke their handlers 
    $('a').on("click",function () { alert('hi') }).trigger('click');
    // Page will alert twice. On page load, a click 
    // is triggered for each <a> in the wrapper set.  
})(jQuery); 