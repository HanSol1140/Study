// DOM 객체 탭메뉴명 변수로 할당
var tab = $('#menu_gnb').find('li');
console.log("탭메뉴 li갯수는 "+tab.length);
// Event Listene
// tab_menu(0)<= 매개체 = 매개함수
var i;
function tab_menu(num) {
    // 구조의 tab_menu = 0~4 / i = 0~4 => 같음
    for(i=0; i<tab.length; i++){
        if(num == i){
            // a-1. active 클래스 적용
            tab.eq(i).addClass('active');
            $('.tab_content_0'+i).show();
        } else{
            // a-1. active 클래스 제거
            tab.eq(i).removeClass('active');
            $('.tab_content_0'+i).hide();
        }
    }
}