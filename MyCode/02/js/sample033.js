(function ($) {
    //James Padolsey filter extension 
    jQuery.expr[':'].regex = function (elem, index, match) {
        var matchParams = match[3].split(','), validLabels = /^(data|css):/, attr = { method: matchParams[0].match(validLabels) ? matchParams[0].split(':')[0] : 'attr', property: matchParams.shift().replace(validLabels, '') }, regexFlags = 'ig', regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g, ''), regexFlags);
        return regex.test(jQuery(elem)[attr.method](attr.property));
    }
    // Select div's where the id attribute contains numbers 
    alert($('div:regex(id,[0-9])').length); // Alerts "2"  
    // Select div's where the id attribute contains the string "Two" 
    alert($('div:regex(id, Two)').length); // Alerts "1"  
})(jQuery);