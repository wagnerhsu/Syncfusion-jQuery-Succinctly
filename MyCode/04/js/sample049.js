(function ($) {
    $('p').find('*') // Select all nodes     
    .addBack() // Include <p>     
    .contents() // Grab all child nodes, including text     
    .filter(function () { return this.nodeType == Node.TEXT_NODE; }) // Remove non-text nodes     
    .each(function (i, text) { alert(text.nodeValue) }); // Alert text contained in wrapper set  
})(jQuery);