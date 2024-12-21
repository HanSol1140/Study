$(document).ready(function(){
    // 모두열기 | 모두닫기
    $('.open').click(function(){
        $('#contents1').show();
    });
    $('.close').click(function(){
        $('#contents1').hide();
    });
    // 각 항목 열기 | 닫기
    $('.open1').click(function(){
        $(this).parent().next().show();
    });
    $('.close1').click(function(){
        $(this).parent().next().hide();
    });
});