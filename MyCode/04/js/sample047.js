(function ($) {
    var $p = $('p');
    // Replace 'hate' with 'love' 
    $p.text($p.text().replace(/hate/ig, 'love'));
    // Remove 'twister' and replace it with nothing 
    $p.text($p.text().replace(/twister/ig, ''));   // Keep in mind that text() returns a string, not the jQuery object. 
    // That is how replace() string method is chained after using text() 
})(jQuery); 