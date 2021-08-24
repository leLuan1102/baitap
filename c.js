$(function () {

    $('#1').click(function () {
        $('#情報').toggle(1000);
        $('#興味').hide();
        $('#専門').hide();
        $('#目標').hide();
    })

});

$(function () {

    $('#1').click(function () {
        $('#1').css('color', 'red');
        $('#2').css('color', 'white');
        $('#3').css('color', 'white');
        $('#4').css('color', 'white');
    });
});


$(function () {

    $('#2').click(function () {
        $('#情報').hide();
        $('#興味').toggle(1000);

        $('#専門').hide();
        $('#目標').hide();
    })

});

$(function () {

    $('#2').click(function () {
        $('#2').css('color', 'red');
        $('#1').css('color', 'white');
        $('#3').css('color', 'white');
        $('#4').css('color', 'white');

    });
});




$(function () {

    $('#3').click(function () {
        $('#情報').hide();
        $('#興味').hide();
        $('#専門').toggle(1000);
        $('#目標').hide();
    })

});
$(function () {

    $('#3').click(function () {
        $('#3').css('color', 'red');
        $('#1').css('color', 'white');
        $('#2').css('color', 'white');
        $('#4').css('color', 'white');

    });
});
$(function () {

    $('#4').click(function () {
        $('#情報').hide();
        $('#興味').hide();
        $('#専門').hide();
        $('#目標').toggle(1000);
    })

});
$(function () {

    $('#4').click(function () {
        $('#4').css('color', 'red');
        $('#1').css('color', 'white');
        $('#3').css('color', 'white');
        $('#1').css('color', 'white');

    });
});
$(function () {

    $("input[value='hien']").click(function () {
        $('#4').css('color', 'red');
        $('#1').css('color', 'white');
        $('#3').css('color', 'white');
        $('#1').css('color', 'white');

    });
});

