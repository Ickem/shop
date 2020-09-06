$(function(){
    $('#drop-down-language li span').click(function(){
        $(this).next().css('display', 'initial');

            $('#drop-down-language ul li').click(function(){
               let lang = $(this).text();
                $('#drop-down-language li span').html(lang + ' &#9660');
                $('li ul').css('display', 'none');
            });
    });

    $('#drop-down-currency li span').click(function(){
        $(this).next().css('display', 'initial');

        $('#drop-down-currency ul li').click(function(){
            let lang = $(this).text();
            $('#drop-down-currency li span').html(lang + ' &#9660');
            $('li ul').css('display', 'none');
        });
    });
});



