(function ($) {
    // Alerts "I love using jQuery!" because no HTML elements exist 
    alert($('p:first').contents().get(0).nodeValue);
    // Alerts "I love" 
    alert($('p:last').contents().get(0).nodeValue);
    // Alerts "really" but is an HTML element, not text node 
    alert($('p:last').contents().eq(1).text());
    // Alerts "using jQuery!" 
    alert($('p:last').contents().get(2).nodeValue);
})(jQuery); 