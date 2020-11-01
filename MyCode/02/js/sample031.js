(function ($) {
    // Select all div's, remove all div's that have a child element with class="jQuery" 
    alert($('div:not(:has(.jQuery))').text()); // Alerts combined text of all div's  
    // Select all div's, remove all div's that are odd in the set (count starts at 0)  
    alert($('div:not(:odd)').text()); // Alerts combined text of all div's  
})(jQuery); 