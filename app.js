//function to help scrolling work no matter where cursor is
$(function() {
    var $section = $('.projects-left');
    console.log("testinggggg");
    $section.scrollspy({
        min: $section.offset().top,
        onEnter: function(element, position) {
            $section.addClass('fixed');
            console.log('Ive entered');
        },
        onLeaveBottom: function(element, position) {
            $section.removeClass('fixed');
            console.log('Ive left');
        }
    });
});

$(document).ready(function(){
    if($('#test').visible(true)) {
        console.log("in view");
    } else {
        console.log("NOT in view");
    }
});
