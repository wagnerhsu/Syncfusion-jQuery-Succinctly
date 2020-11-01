(function ($) {
    $('ul').on("click", function (event) { // Attach click handler to <ul> and pass event object     
        // event.target is the <a>     
        $(event.target).parent().remove(); // Remove <li> using parent()     
        return false; // Cancel default browser behavior, stop propagation 
    });
})(jQuery);