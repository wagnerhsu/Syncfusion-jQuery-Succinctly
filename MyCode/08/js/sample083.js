(function ($) {
    $.fn.count = function () {
        var $this = $(this); // "this" is the jQuery object     
        $this.text('0'); // Sets the counter start number to zero     
        var myInterval = window.setInterval(function () {
            // Interval for counting         
            var currentCount = parseFloat($this.text()); var newCount = currentCount + 1; $this.text(newCount + '');
        }, 1000);
    };
})(jQuery);
jQuery('#counter1').count();  