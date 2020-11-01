(function ($) {
    // Bind events 
    $('input').on('click', function () { alert('You clicked me!'); });
    $('input').on('focus', function () {
        // alert and focus events are a recipe for an endless list of dialogs
        // we will log instead
        $('#log').html('You focused this input!');
    });
    // Unbind events 
    $('button').on("click",function () {
        // Using shortcut binding via click()     
        $('input').off('click');
        $('input').off('focus');
        // Or, unbind all events     // $('button').unbind(); 
    });
})(jQuery); 