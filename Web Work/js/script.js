/**
 * Created by Pavan Yekabote on 6/29/2017.
 */

$(document).ready(function(){


    $('#regis').click(function () {
        $('.tab').addClass('closed');
        $('.tab').removeClass('active');
        $('#register').removeClass('closed');
        $('#register').addClass('active');
        $('#register').addClass('bounce');

    });


    $('#signin').click(function () {
        $('.tab').addClass('closed');
        $('.tab').removeClass('active');
        $('#login').removeClass('closed');
        $('#login').addClass('active');
        
    });

});
