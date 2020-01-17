$(document).ready(function(){
  $(".bxslider").bxSlider({
    controls: false,
    auto: true
  });

  var top = document.querySelector(".icon-up-open")
  top.onclick = function scroll(){
    (function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/9));
    }
})();
  }
});
