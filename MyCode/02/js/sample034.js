(function ($) {
    // Each statement alerts "2" because there are 
    // two direct child <p> elements inside of <div> 
    alert($('div').children().length);
    // or 
    alert($('>*', 'div').length);
    alert($('div').find('>*').length);

    // Each statement alerts 6 because the <div> contains 
    // 6 descendants not including the text node. 
    alert($('div').find('*').length);
    // or 
    alert($('*', 'div').length);
})(jQuery); 