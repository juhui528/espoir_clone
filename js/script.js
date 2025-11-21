$(function () {
  $(".nav_btn").on('mouseenter', function () {
    $("nav").addClass("on");
  });
  $("nav").on('mouseleave', function () {
    $("nav").removeClass("on");
  });


  //btn_ani
  $(".hero .hero_i .h_con .h_text a").on({
    mouseover: function () {
      $(this).stop().animate({
        backgroundColor: "#fef1e2",
        color: "#ce0e2d",
      }, 400, 'linear');
    },
    mouseout: function () {
      $(this).stop().animate({
        backgroundColor: "#ce0e2d",
        color: "#ffffff",
      }, 400, 'linear');
    }
  });


})







document.addEventListener('DOMContentLoaded', function () {
  // 모든 .slide 클래스를 가진 요소들을 한 번에 초기화
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: "swiper-scrollbar",
      clickable: true,
      type: "progressbar",
    },
  });
});

