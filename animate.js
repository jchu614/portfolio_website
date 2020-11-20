const $animation_elements = $('.animation-element');
const $window = $(window);

//View Detection
function check_in_view() {
    //current window info
    const window_height = $window.height();
    const window_top_position = $window.scrollTop();
    const window_bottom_position = (window_top_position + window_height);

    //get element info
    $.each($animation_elements, function() {
        const $element = $(this);
        const element_height = $element.outerHeight();
        const element_top_position = $element.offset().top;
        const element_bottom_position = (element_top_position + element_height);

        //is current container visible? 
        if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

//on scroll or resize detect elements
$window.on('scroll', check_in_view);
$window.on('scroll resize', check_in_view);

//triggering scroll event on load
$window.trigger('scroll');