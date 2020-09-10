$(document).ready(function () {
    let change_img_time = 4000,
        transition_speed = 400;

    let listItems = $("#slide").children('li'),
        listLen = listItems.length,
        current,
        changeTimeout;

    function moveTo(newIndex) {
        let i = newIndex;

        if (newIndex == 'prev') {
            i = (current > 0) ? (current - 1) : (listLen - 1);
        }

        if (newIndex == 'next') {
            i = (current < listLen - 1) ? (current + 1) : 0;
        }

        listItems.fadeOut(transition_speed)
            .eq(i).fadeIn(transition_speed);

        current = i;

        clearTimeout(changeTimeout);
        changeTimeout = setTimeout(function() { moveTo('next'); }, change_img_time);
    };

    $("#prev").click(function () {
        moveTo('prev');
    });

    $("#next").click(function () {
        moveTo('next');
    });

    moveTo('next');

});
