$(document).ready(function () {

    let change_img_time = 4000,
        transition_speed = 400;

    let listItems = $("#slider").children('li'),
        dotItems = $('#dots').children('li'),
        defaultItems = 0;

    function moveTo(newIndex) {
        let i = newIndex;
        dotItems.removeClass('active')
            .eq(i).addClass('active');

        listItems.fadeOut(transition_speed)
            .eq(i).fadeIn(transition_speed);
    }

    $("#dots li").click(function () {
        let i = $('#dots li').index(this);
        moveTo(i);
    });

    moveTo(defaultItems);
});