$(function() {

  // 전체 드롭다운 메뉴
  $('#i_header > .onedepth').on({
    "mouseenter" : function(){
      $('#header_wrap').stop().animate({"height":"330px"},300);      
    },
    "mouseleave" : function(){
      $('#header_wrap').stop().animate({"height":"80px"},300);      
    }
  });

  // 메뉴 상단 고정
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >=100){
      $('#header_wrap').addClass('sticky');
    }else{
      $('#header_wrap').removeClass('sticky');
    }
  });

  // 모바일 메뉴 패널
  $('.btn_mob_menu').on('click',function(e){
    e.preventDefault();
    $('#m_menu_panel').stop().animate({"left":"0"},500);
    $('#m_menu_bg').css('display','block');
    $('.btn_close_menu').stop().animate({"left":"235"},500);    
  });
  $('.btn_close_menu').on('click',function(e){
    e.preventDefault();
    $('#m_menu_panel').stop().animate({"left":"-220"},500);
    $('.btn_close_menu').stop().animate({"left":"-235"},500);
    $('#m_menu_bg').css('display','none');
  });  

  // 모바일 메뉴 토글
  var mobSubMenu = $('.m_menu_area>.onedepth .sub_menu');
  mobSubMenu.hide();
  $('.m_menu_area>.onedepth>li').click(function(e){
    e.preventDefault();
    $(this).find('.sub_menu').toggle('slow',function(){

    });
  });

  // 맨위로가기 버튼
  $('#btn_scrolltop').hide();
  $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $('#btn_scrolltop').fadeIn();
    }else{
      $('#btn_scrolltop').fadeOut();
    }
  });
  $('#btn_scrolltop').click(function(){
    $('body,html').animate({
      scrollTop:0
    }, 800);
    return false;
  });



});