(function ($) {
    // Select only the direct <li> children. Alerts "3". 
    alert($('ul:first').find('> li').length);  // or 
    alert($('> li', 'ul:first').length);
}
)(jQuery);