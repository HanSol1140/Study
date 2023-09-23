$(document).ready(function(){
    $('.answer').hide();
    $('.questions').on('click',function(){
        if ($(this).is('.on, .font')) {
            slideUp();
        } else {
            slideUp();
            $(this).children().first().addClass('font');
            $(this).addClass('on').next().slideDown();
        }
        function slideUp() {
            $('.questions').removeClass('on').next().slideUp();
            $('.questions p').removeClass('font');
        };
    });

    $('.table tr td').click(function(){
        $('.table tr td').removeClass("color");
        $(this).addClass("color");
      });

    
});
