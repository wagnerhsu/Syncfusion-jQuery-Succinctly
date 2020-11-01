(function ($) {
    // 3 alerts, one for each div     
    $('div').each(function () {
        // "this" is each element in the wrapper set         
        alert($(this).attr('id'));
        // Could also be written: alert(this.id);     
    });
})(jQuery);

