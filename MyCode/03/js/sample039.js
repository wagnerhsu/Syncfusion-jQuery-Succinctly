(function ($) {
    // Wrap a <strong> element around any text within 
    // a <li> that contains the pattern "jQuery" 
    var pattern = /jQuery/i;
    $('li').filter(function () { return pattern.test($(this).text()); }).wrap('<strong></strong>');
})(jQuery); 