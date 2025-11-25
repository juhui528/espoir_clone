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
      el: ".swiper-scrollbar",
      type: "progressbar",
      // clickable: true,
    },
  });

  swiper = new Swiper(".slogan", {
    spaceBetween: 0,
    centeredSlides: false,
    loop: true,
    slidesPerView: 'auto',
    speed: 25000, // 천천히 슬라이드
    autoplay: {
      delay: 0, // 멈춤 없이
      disableOnInteraction: false,
    },
    freeMode: true, // 부드러운 연속 이동
    freeModeMomentum: false,
    allowTouchMove: false,
  });

  swiper = new Swiper(".ht_contents", {
    slidesPerView: 6.5,
    spaceBetween: 8,
    loop: true,
    freeMode: true,
    slidesOffsetBefore: -40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-scrollbar",
      type: "progressbar",
      // clickable: true,
    },
  });


  var swiper = new Swiper(".noti_i", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  var swiper = new Swiper(".bigimg", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const products = document.querySelectorAll(".pd_box");

  // 1) 슬라이드 이동 시 제품 highlight
  swiper.on("slideChange", function () {
    const realIndex = swiper.realIndex; // loop 시 실제 슬라이드 인덱스
    products.forEach((pd, idx) => pd.classList.remove("on"));
    products[realIndex].classList.add("on");
  });

  // 2) 제품 클릭 시 슬라이드 이동
  products.forEach((pd, idx) => {
    pd.addEventListener("click", () => {
      swiper.slideToLoop(idx); // loop 슬라이드 이동
    });
  });
});




document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
});