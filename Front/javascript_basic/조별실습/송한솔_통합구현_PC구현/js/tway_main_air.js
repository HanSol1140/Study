// 항공권 팝업효과
$('.line_2nd li>input').on('focus',function(){
  $('.air_bgi').show();
  $('.booking').animate({'top':'-390px'});
  $('.air_btn').show();
  $('.country').hide();
  $('.people').hide();
  $(this).next().next().slideDown();
  $('.line_1st').slideDown();
});
$('.air_btn').on('click',function(){
  $('.air_bgi').hide();
  $('.booking').animate({'top':'0'});
  $('.air_btn').hide();
  $('.country').hide();
  $('.people').hide();
});
$('.line_2nd li>input').on('focus',function(){
  $('.country').hide();
  $('.people').hide();
  $(this).next().next().slideDown();
  $('.line_1st').slideDown();
});

$('main').on('click',function(){
  $('.country').hide();
  $('.people').hide();
})

// 성인,소아 유아 인원 추가감소. 

$('.add').click(function(){
  let num=$(this).prev().val();
  num++
  $(this).prev().val(num);
  let adult=$('#ad').val();
  let child=$('#ch').val();
  let infant=$('#in').val();
  $('#total').val(`성인:${adult}, 소아:${child}, 유아:${infant}`);
  // 성인10명이상일시 경고창. 단체 체크효과 | 선택초기화
  if(adult==10){
    if(confirm('단체 항공권 검색을 위해 선택한 정보를 초기화 하시겠습니까?')){
    $('#member').attr('checked',true);
    $('#air_start').val('');
    $('#air_end').val('');
  }else{
    adult=1;
    $('#ad').val(adult);
    $('#total').val(`성인:${adult}, 소아:${child}, 유아:${infant}`);
  }}
});

$('.sub').click(function(){
  let num=$(this).next().val();
  if(num>0){
    num--
    $(this).next().val(num);
  }
  let adult=$('#ad').val();
  let child=$('#ch').val();
  let infant=$('#in').val();
  $('#total').val(`성인:${adult}, 소아:${child}, 유아:${infant}`);
});

// adult 단체버튼
$('#member').on('click',function(){
  let num=$('#ad').val();
  if(num<10){
    num=10;
    $('#member').attr('checked',true);
  }else{
    num=1;
    $('#member').attr('checked',false);
  };
  $('#ad').val(num);
  let adult=$('#ad').val();
  let child=$('#ch').val();
  let infant=$('#in').val();
  $('#total').val(`성인:${adult}, 소아:${child}, 유아:${infant}`);
});

// 출발. 도착 비행기 클릭. 
$('#start .country_right>li').on('click',function(){
  let air=$(this).text();
  $('#air_start').val(air);
  $('.country').hide();  
});
$('#end .country_right>li').on('click',function(){
  let air=$(this).text();
  $('#air_end').val(air);
  $('.country').hide();
});

// .root 서브메뉴 아래롤
$('.root>div').on('mouseenter',function(){
  $(this).children('nav').stop().slideDown();
})
$('.root>div').on('mouseleave',function(){
  $(this).children('nav').stop().slideUp();
})

// gnb+항공권단 스크롤바 좀만 내려가면 = fixed로 변경 및 slider 해당 크기만큼 늘리기
$(window).on('scroll',function(){
  var win_scroll= $(this).scrollTop();
  if(win_scroll>50){
    $('header .gnb_bg').css({'position':'fixed', 'top':'0','left':'50%','transform':'translateX(-50%)'});
    $('header .gnb_bg').css({'background-color':'#fff'});
    $('header .gnb').css({'color':'black'});
    $('header .gnb>h1 img').attr('src','https://contents-image.twayair.com/homepage/images/common/top_logo.png');
    $('header .gnb>article>ul li a:nth-child(1) img').attr('src','https://contents-image.twayair.com/homepage/images/ico/ico_top_login.png');
    $('header .gnb>article>ul li a:nth-child(2) img').attr('src','https://contents-image.twayair.com/homepage/images/ico/ico_top_search.png');
    $('header .gnb>article>ul li a:nth-child(3) img').attr('src','https://contents-image.twayair.com/homepage/images/ico/ico_top_allmenu.png');
    $('#sliderbox').css({'margin-top':'80px'});
  }else{
    $('header .gnb_bg').css({'position':'relative', 'top':'0','left':'0','transform':'translateX(0)'});
    $('header .gnb_bg').css({'background-color':'transparent'});
    $('header .gnb').css({'color':'#fff'});
    $('header .gnb>h1 img').attr('src','https://contents-image.twayair.com/homepage/images/main/top_logo.png');
    $('header .gnb>article>ul li a:nth-child(1) img').attr('src','https://contents-image.twayair.com/homepage/images/main/ico_top_login.png');
    $('header .gnb>article>ul li a:nth-child(2) img').attr('src','https://contents-image.twayair.com/homepage/images/main/ico_top_search.png');
    $('header .gnb>article>ul li a:nth-child(3) img').attr('src','https://contents-image.twayair.com/homepage/images/main/ico_top_allmenu.png');
    $('#sliderbox').css({'margin-top':'0'});
  }
})