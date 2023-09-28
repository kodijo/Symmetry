// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

$(document).ready(function(){
    $(".contentsPanel").each(function() {                
            $(this).prepend('<div class="showPanel">[show]</div><div class="hidePanel">[toggle]</div>');
    });
    
    
$(".hidePanel").click(function(){
            
    $("#sidebar").toggleClass("sidebar");
    $("#sidebar").toggleClass("sidebarshow");
    $("#mainsection").toggleClass("mainsection");
    $("#mainsection").toggleClass("mainsectionshow");
            
});
$(".showPanel").click(function(){
            
    $("#sidebar").toggleClass("sidebar");
    $("#sidebar").toggleClass("sidebarshow");
    $("#mainsection").toggleClass("mainsection");
    $("#mainsection").toggleClass("mainsectionshow");
            
});
    
    
});


