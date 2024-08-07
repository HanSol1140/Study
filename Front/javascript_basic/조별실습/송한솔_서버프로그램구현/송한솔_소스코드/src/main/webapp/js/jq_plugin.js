$(document).ready(function(){
    /* 1. jQuery UI 플러그인 : 효과 메서드들의 추가 기능 제공 플러그인 */
    /* show(), hide(), toggle() => effect type 지정
    effect type = blind, bounce, clip, explode, fold, highlight, shake 등 */
    
    $('ul li').eq(0).click(function(){
        $('article img').stop().show('shake',1000);
    });
    $('ul li').eq(1).click(function(){
        $('article img').stop().hide('highlight',1000);
    });
    $('ul li').eq(2).click(function(){
        $('article img').stop().toggle('explode',1000);
    });

    /* 2. jQuery Core에서는 속성값이 숫자형만 가능
    jQuery UI플러그인에서는 대부분 속성 사용 가능 */
    /* 푸터 배경색 블랙, 글자색 실버로 애니메이트 */

    $('ul li').eq(-1).click(function(){
        $('footer').stop().animate({color:'silver',backgroundColor:'black'},1000);
        $('footer>span').delay(3000).animate({color:'red'},500);
    });
});