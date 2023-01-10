$(function () {

    $('.variable-width').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true

        // slidesToShow: 4,
        // autoplaySpeed: 550,
        // rtl: false,
        // slidesToScroll: 2,
        // arrows: true,
        // centerMode: false,
        // variableWidth: true,
        // infinite: false,
        // focusOnSelect: true,
        // touchMove: true,
        // dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
        // autoplay: true, // 자동 스크롤 사용 여부
        // autoplaySpeed: 10000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        // pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
      });

});