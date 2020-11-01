(function ($) {  // Alerts middle, by filtering out the first 
    // and last <p> elements in the wrapper set. 
    alert($('p').filter(':not(:first):not(:last)').text());
})(jQuery); 