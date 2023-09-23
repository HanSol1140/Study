// let = 변수 재기입가능
// const = 변수 ,재할당이 불가능한 상수 

const video = $('.video');
const doBtn = $('#car_btn')

$(doBtn).click(function(){
    if(video.get(0).paused){
        // video의 첫번째가(0)를 가져왓을때, 정지상태면
        video.get(0).play();
        doBtn.children('i').eq(1).hide();
        doBtn.children('i').eq(0).show();
        // 비디오의 첫번째를 가져와서 재생한다
    }else{
        video.get(0).pause();
        doBtn.children('i').eq(0).hide();
        doBtn.children('i').eq(1).show();
    }
});


// 예시
// const video = $('.video');
// const doBtn = $('#car_btn');
// doBtn.click(function(){
//     if(video.get(0).paused){
//         video.get(0).play();
//         doBtn.html('<i class="fa fa-pause-circle-o" aria-hidden="true"></i>');
//     }else{
//         video.get(0).pause();
//         doBtn.html('<i class="fa fa-play-circle-o" aria-hidden="true"></i>');
//     }
// });



// SOUND CONTROL BUTTON
const soundBtn = $('#car_sound');
// 사운드 무음으로 초기값 설정
video.prop('muted',true);
soundBtn.click(function(){
    // muted 상태일때
    if(video.prop('muted')){
        soundBtn.html('<i class="fa fa-volume-up" aria-hidden="true"></i>');
        video.prop('muted',false);
    }else {
        soundBtn.html('<i class="fa fa-volume-off" aria-hidden="true"></i>');
        video.prop('muted',true);
    }
});