$(document).ready(function(){
    /* scrollTo 플러그인 사용 */
    $('.gnb a').click(function(e){
        e.preventDefault();
        // scrollTo(링크될 # || Y축픽셀값, 애니메이션 시간)
        $(window).scrollTo(this.hash || 0,500);
    });

    /* 스크롤 100px이상 되었을때 TOP 버튼 나오도록 코딩 */
    // 1. 스크롤시 alert() 나오도록 코딩
    var sa = 100;
    $(window).scroll(function(){
        var num = $(window).scrollTop();
        console.log(num);
        if(num>sa){
            $('aside div').stop().fadeIn();
        }else{
            $('aside div').stop().fadeOut();
        }
    });

    /* animate 부드러운 스크롤탑 이동 */
    $('.top').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},1000,'swing');
    });
});



// 내가한거


// $(document).ready(function(){
//     $('.gnb a').click(function(e){
//         // 기본 기능 제거
//         e.preventDefault();
//         // alert("!!");
//         // scrollTo 플러그인 사용    
//         // scrollTo(링크될 # || y축픽셀값, 애니메이션 시간)
//         $(window).scrollTo(this.hash || 0,1000); 
//     });
//     // 스크롤 100px 이상 되었을때 TOP 버튼이 나오도록 코딩
//     // if~else, scrollTop(), 이벤트 scroll
//     $(window).scroll(function(){
//         var scrT = $(this).scrollTop();
//         if(scrT<=100){
//             $('aside div').stop().slideUp();
//         } else{
//             $('aside div').stop().slideDown();
//         }
//     });

//     // animate 부드러운 스크롤탑 이동
//     $('.top').click(function(){
//         e.preventDefault();
//         e.preventDefault();
//         $('html,body').stop().animate({scrollTop:0},3000,'swing');
        
//     });
// });