$(function() {

  // 전체 드롭다운 메뉴
  $('.onedepth').on({
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
  
});