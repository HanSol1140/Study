$(document).ready(function(){
    //   jQuery UI플러그인 : 효과 메서드들의 추가 기능 제공 플러그인
    // show('여기'), hide('여기'), toggle('여기') => effect type 지정
    // effect type = blind, bounce, clip, explode, fold, highlight
    $('ul li').eq(0).click(function(){
        $('article img').stop().show(3000);
    });
    $('ul li').eq(1).click(function(){
        $('article img').stop().hide();
    });
    $('ul li').eq(2).click(function(){
        $('article img').stop().toggle('explode');
    });

    // jQuery Core에서는 속성값이 숫자형만 가능
    // jQuery UI플러그인에서는 대부분 속성 사용 가능
    $('ul li').eq(3).click(function(){
        $('footer').animate({color:'silver', backgroundColor:'black'},'1000','linear');
        $('footer span').delay(1000).animate({color:'red',fontWeight:'700'},'3000','linear');
    });
});