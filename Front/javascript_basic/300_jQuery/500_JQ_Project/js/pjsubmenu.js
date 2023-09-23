// alert("!!");
$(".gnb li").on({'mouseenter':function(){
    $(this).children('div').stop().slideDown();
    }, 'mouseleave':function(){
    $(this).find('div:visible').stop().slideUp();
    // find('div:visible')
    // $(this)의 자손 div:visible => div중에 display에 출력되고 있는것
    // display:none; 상태는 선택이 안됨??
}});