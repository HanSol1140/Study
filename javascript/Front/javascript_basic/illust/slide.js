//1. 대상선정 tg
var tg = document.querySelector('.section .slide');

document.querySelector('.section .left').addEventListener('click' , function(){
 
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
});
document.querySelector('.section .right').addEventListener('click',function(){
    
    var tg3 = document.querySelector('.slide li:last-child');
    // 1. li 맨뒤를 잘라서 맨앞으로 이동
        tg.insertBefore(tg3, document.querySelector('.slide li:first-child'));

    // 2. 부모 슬라이드(tg) left 값을 -100% 변경 앞으로 이동
        tg.style.left = '-100%';
        tg.style.transition = 'none';
    // 3. 슬라이드 오른쪽으로 이동 left0 transition으로 설정
        // setTimeout(function(){
        //     tg.style.left="0";
        //     tg.style.transition="all 0.8s";
        // } , 100);
    });
