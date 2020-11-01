(function ($) {
    // Alerts "1"     
    alert($('a[title="jQuery"][href^="http://"]').length);
    // Alerts "0" for case sensitive
    alert($('a[title="jquery"][href^="http://"]').length);
})(jQuery);
