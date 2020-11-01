(function ($) {
    var arrayOfAnchors = $('a').get(); // Create native array from wrapper set     
    alert(arrayOfAnchors[2].title); // Alerts the third link 
})(jQuery);
