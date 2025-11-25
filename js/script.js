$(function () {
  //btn_ani
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


  let header = $("header");
  let headerHeight = header.outerHeight();

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();

    // ⭐ 헤더 색 변경만 남김
    if (scrollTop > 100) {
      header.addClass("header_dark");
    } else {
      header.removeClass("header_dark");
    }

    // ⭐ 탑버튼: footer 전까지만 노출
    const footerTop = $("footer").offset().top;
    const windowHeight = $(window).height();

    if (scrollTop > 300 && scrollTop + windowHeight < footerTop - 30) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }


  });

  // TOP 버튼 기능
  $(".top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
  });


})







document.addEventListener('DOMContentLoaded', function () {
  // 모든 .slide 클래스를 가진 요소들을 한 번에 초기화
  const mySwiper = new Swiper(".mySwiper", {
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

  const sloganSwiper = new Swiper(".slogan", {
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


  const notiSwiper = new Swiper(".noti_i", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });

  const bigimgSwiper = new Swiper(".bigimg", {
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
  bigimgSwiper.on("slideChange", function () {
    const realIndex = bigimgSwiper.realIndex; // loop 시 실제 슬라이드 인덱스
    products.forEach((pd, idx) => pd.classList.remove("on"));
    products[realIndex].classList.add("on");
  });

  // 2) 제품 클릭 시 슬라이드 이동
  products.forEach((pd, idx) => {
    pd.addEventListener("click", () => {
      bigimgSwiper.slideToLoop(idx); // loop 슬라이드 이동
    });
  });


  let productSwiper;

  function initProductSwiper() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1024 && !productSwiper) {
      // 슬라이드 초기화 (모바일/태블릿)
      productSwiper = new Swiper(".nproducts_wrap", {
        slidesPerView: 3,   // 한 장씩
        spaceBetween: 4,
        loop: false,
        scrollbar: {
          el: ".swiper-scrollbar",
          type: "progressbar",
        },
      });
    } else if (screenWidth > 1024 && productSwiper) {
      // 데스크탑이면 Swiper 제거 후 grid로 복원
      productSwiper.destroy(true, true);
      productSwiper = undefined;
    };

  };
  // 초기 실행
  initProductSwiper();

  // 리사이즈 시 적용
  window.addEventListener("resize", () => {
    initProductSwiper();
  });








  swiper = new Swiper(".ht_contents", {
    slidesPerView: 6,
    spaceBetween: 50,
    loop: true,
    freeMode: true,
    // slidesOffsetBefore: -40,
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


});




document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
});