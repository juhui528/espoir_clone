$(function () {

  //nav_animation
  function setNavEvent() {
    // 기존 이벤트 제거
    $(".nav_btn").off('mouseenter click');
    $("nav").off('mouseleave click');
    $(".close").off('click');

    if (window.innerWidth > 768) {
      // PC: hover 이벤트
      $(".nav_btn").on('mouseenter', function () {
        $("nav").addClass("on");
      });
      $("nav").on('mouseleave', function () {
        $("nav").removeClass("on");
      });
    } else {
      // 모바일/태블릿: click 이벤트
      $(".nav_btn").on('click', function () {
        $("nav").toggleClass("on");
      });
      $(".close").on('click', function () {
        $("nav").removeClass("on");
      });
    }
  }

  // 초기 실행
  setNavEvent();

  // 화면 리사이즈 시 이벤트 재설정
  $(window).on('resize', function () {
    setNavEvent();
  });



  //btn_ani
  $(".hero .hero_i .h_con .h_text a, .creator .creator_i .c_text .c_btn a").on({
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




  //header
  const header = $("header");

  $(window).on("scroll", function () {
    let scrollTop = $(this).scrollTop();
    if (scrollTop > 800) {
      header.addClass("header_dark");
    } else {
      header.removeClass("header_dark");
    }

  });

  // $(". .swiper-slide").each(function () {
  //   const $slide = $(this);
  //   const slideTop = $slide.offset().top;
  //   const slideBottom = slideTop + $slide.outerHeight();

  //   // 화면에 해당 슬라이드가 걸쳐있으면 체크
  //   if (scrollTop + $(window).height() / 2 >= slideTop && scrollTop + $(window).height() / 2 < slideBottom) {
  //     if ($slide.hasClass("white")) {
  //       header.addClass("header_dark");
  //     } else {
  //       header.removeClass("header_dark");
  //     }
  //     return false; // 첫 번째 해당 슬라이드만 체크
  //   }
  // });



  // top 버튼
  const topBtn = $(".top");

  $(window).on("scroll", function () {

    let scrollTop = $(this).scrollTop();
    let winH = $(window).height();
    let footerTop = $("footer").offset().top;

    // 보이기 / 숨기기
    if (scrollTop > 300) topBtn.fadeIn();
    else topBtn.fadeOut();

    // footer에 닿으면 멈추기
    let bottomSpace = 40;
    let stopTrigger = footerTop - winH;

    if (scrollTop >= stopTrigger) {
      let diff = scrollTop - stopTrigger;
      topBtn.css("transform", `translateY(-${diff}px)`);
    } else {
      topBtn.css("transform", "translateY(0)");
    }

  });

  topBtn.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });


  // 버튼 클릭: ul 토글
  $('.langbox > button').on('click', function (e) {
    e.stopPropagation(); // 외부 클릭 방지
    var $ul = $(this).siblings('ul');

    // 다른 열려 있는 ul 닫기 + 화살표 초기화
    $('.langbox ul').not($ul).slideUp(200);
    $('.langbox > button').not(this).removeClass('open');

    // 클릭한 버튼 ul 토글
    $ul.slideToggle(200);
    $(this).toggleClass('open'); // open 클래스 토글
  });

  // li 클릭: 버튼 텍스트 변경 + ul 닫기 + 화살표 초기화
  $('.langbox ul li').on('click', function () {
    var selectedText = $(this).text();
    var $btn = $(this).closest('.langbox').find('button');
    $btn.contents().first()[0].textContent = selectedText;
    $(this).parent('ul').slideUp(200);
    $btn.removeClass('open'); // ul 닫히면 화살표 원래대로
  });

  // 외부 클릭 시 모든 ul 닫기 + 화살표 원래대로
  $(document).on('click', function () {
    $('.langbox ul').slideUp(200);
    $('.langbox > button').removeClass('open');
  });

});

//JQuery







document.addEventListener('DOMContentLoaded', function () {
  // 모든 .slide 클래스를 가진 요소들을 한 번에 초기화
  const mySwiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-scrollbar",
      type: "progressbar",
    },
  });

  // progressbar 클릭 이벤트 추가

  const overlay = document.querySelector(".swiper-scrollbar-overlay");
  const totalSlides = 7; // 실제 슬라이드 개수

  overlay.addEventListener("click", (e) => {
    const rect = overlay.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    const targetIndex = Math.floor(ratio * totalSlides);

    mySwiper.slideToLoop(targetIndex);
  });


  // 슬로건 모션
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



  // 공지사항슬라이드
  const notiSwiper = new Swiper(".noti_i", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });


  // 제품섹션 이미지 슬라이드
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
        scrollbar: {
          el: ".swiper-scrollbar",
          type: "progressbar",
        },
        breakpoints: {

          1: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          575: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 3.6,
            spaceBetween: 16,
          },
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

  bigimgSwiper.on("slideChange", function () {
    const realIndex = bigimgSwiper.realIndex; // loop에서도 실제 idx

    // 제품 highlight 업데이트
    products.forEach((pd, idx) => pd.classList.remove("on"));
    products[realIndex].classList.add("on");

    // ⭐ productSwiper가 있을 때 자동 이동시키기
    if (productSwiper) {
      productSwiper.slideTo(realIndex, 300); // (index, speed)
    }
  });





  // hottok섹션 슬라이드
  const htSwiper = new Swiper(".ht_contents", {
    slidesPerView: 4,   // 화면 크기에 맞춰 슬라이드 개수 고정
    spaceBetween: 40,
    loop: true,
    loopAdditionalSlides: 6,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-scrollbar",
      type: "progressbar",
    },
    on: {
      init: function () {
        // 두 번째 슬라이드를 첫 화면으로 설정
        this.slideToLoop(1, 0);

        // 내부 상태 동기화
        this.activeIndex = 1;          // 현재 activeIndex를 두 번째 슬라이드로
        this.realIndex = 1;            // 실제 슬라이드 인덱스
        this.updateSlidesClasses();    // 클래스 재적용
        this.pagination.update();      // 프로그래스바/페이지네이션 업데이트
        this.updateProgress();         // 진행률 업데이트
      }
    },
    breakpoints: {
      0: {
        slidesPerView: 1,   // 모바일에서는 1개
        spaceBetween: 16,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });


  //creat motion
  AOS.init();
});