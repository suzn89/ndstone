$(function() {
  $('.onedepth').on({
    "mouseenter" : function(){
      $('#header_wrap').stop().animate({"height":"330px"},600);
    },
    "mouseleave" : function(){
      $('#header_wrap').stop().animate({"height":"80px"},600);
    }
  });
});