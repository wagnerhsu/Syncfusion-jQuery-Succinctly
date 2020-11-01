$(function () {
    if (jQuery('a').get(0)) { // Is there an element in the set?     
        jQuery('a').attr('href', 'http://www.jquery.com');
    }
    if (jQuery('a').length) { // Check the length of the set. Can also use .size()     
        jQuery('a').attr('title', 'jQuery');
    }
});