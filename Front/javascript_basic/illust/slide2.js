var psts = 0;
//psts = 광클금지 0 사용전 1사용중지
// 1. 대상선정 tg
var tg = document.querySelector('.section .slide');

function goSlider( dir){
    // dir -> 1 왼쪽 dir -> 0 오른쪽
    if(psts =1){return false;}
    psts = 1;

    if(dir == 0) {
        var tg2 = document.querySelector('.slide li:first-child');

        // 왼쪽 방향으로 슬라이드 이동
        tg.style.left='-100%';
        tg.style.transition="all 0.8s";

        // 2. 슬라이드 이동후 맨앞의 것 맨뒤로 이동
        setTimeout(function(){
            //잘라서 맨뒤로 이동
            tg.appendChild(tg2);
            // left값을 초기화
            tg.style.left = "0";
            // 트랜지션을 제거 
            tg.style.transition='none';
        }, 800);
        
    }else if(dir == 1){

    }

    setTimeout(function(){ psts = 0;} , 800);
}

document.querySelector('.section .left').addEventListener('click',function(){
    goSlider(1)
})
document.querySelector('.section .left').addEventListener('click',function(){
    goSlider(0)
})