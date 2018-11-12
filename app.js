//function to help scrolling work no matter where cursor is
$(function() {
    var $nav = $('#projects-left');
    console.log("testinggggg");
    $nav.scrollspy({
        min: $nav.offset().top,
        onEnter: function(element, position) {
            $nav.addClass('fixed');
            console.log('Ive entered');
        },
        onLeave: function(element, position) {
            $nav.removeClass('fixed');
            console.log('Ive left');
        }
    });
});
