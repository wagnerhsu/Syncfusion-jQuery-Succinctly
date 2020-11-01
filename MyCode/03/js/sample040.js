(function ($) {
    // Alerts "parent0" x4 
    alert($('#start').parent().attr('id'));
    alert($('#start').parents('#parent0').attr('id'));
    alert($('#start').parents()[0].id);
    // Gets actual DOM element 
    alert($('#start').closest('#parent0').attr('id'));
    // Alerts "parent1" x4 
    alert($('#start').parent().parent().attr('id'));
    alert($('#start').parents('#parent1').attr('id'));
    alert($('#start').parents()[1].id);
    // Gets actual DOM element 
    alert($('#start').closest('#parent1').attr('id'));
    // Alerts "parent2" x4 
    alert($('#start').parent().parent().parent().attr('id'));
    alert($('#start').parents('#parent2').attr('id'));
    alert($('#start').parents()[2].id);
    // Gets actual DOM element 
    alert($('#start').closest('#parent2').attr('id'));
})(jQuery); 