$('.flip').click(function () {
    $('body').addClass('background-troll');
    $('body').removeClass('background-tray');
    $(this).find('.card').addClass('flipped').mouseleave(function () {
        $(this).removeClass('flipped');
        $('body').addClass('background-gray');
        $('body').removeClass('background-troll');
    });
    return false;
});