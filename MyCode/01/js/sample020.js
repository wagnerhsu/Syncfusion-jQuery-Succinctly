(function ($) {
    // Alerts "object HTMLDocument" in Firefox     
    // Same as $('a', document).context;     
    console.log($('a').context);
    // Alerts "object HTMLDivElement" in FireFox     
    console.log($('a', $('#context')[0]).context);
})(jQuery); 