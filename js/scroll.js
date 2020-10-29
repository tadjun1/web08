$(function(){
  
 var winH = $(window).height(),
     $main = $('main'),
     $section = $main.find('section'),
     $gnb = $('.gnb'),
     
     sp = 1000,
     easing = 'easeOutExpo';
  
 //브라우저 높이값 == section 높이값 
 $section.height(winH);
  
 //브라우저 크기가 바뀌어도 == section 높이값
 $(window).on('resize', function(){
   $section.height($(window).height());
 });
  
 //section 층층이 배치하기<==CSS 처리가 편함
 /* $section.each(function(i){
   $(this).css({
     top: 100 * i + '%'
   })
 });*/
  
 //gnb 앵커 클릭==> 같은 순번의 section으로 이동 
 $gnb.on('click', 'a', function(e){
   e.preventDefault();
  
   var winH = $(window).height(),
       aIndex = $(this).index(),
       posY = winH * aIndex;
   
   $('html, body').stop().animate({
     scrollTop: posY
   }, sp, easing)
   
 });
  
 //스크롤 시 위, 아래로 화면 이동시키기
  /*
  before(), after() ==> HTML 요소 삽입
  prev(), next() ==> HTML 요소 선택
  */
    
  
 $section.on('mousewheel', function(e, delta){
   e.preventDefault();
   
   var sIndex = $(this).index(),
       first = 0,
       last = $section.length - 1;
     
   if(delta > 0 && sIndex != first) {
     var before = $(this).prev().offset().top;
     
     $('html, body').stop().animate({
       scrollTop: before
     }, sp, easing)
         
   } else if(delta < 0 && sIndex != last) {
     var after = $(this).next().offset().top;
     
     $('html, body').stop().animate({
       scrollTop: after
     }, sp, easing)
     
   }
   
 });
  
 //스크롤바 상단 값에 해당하는 gnb 앵커 활성화시키기
 $(window).on('scroll', function(){
   var winH = $(window).height(),
       scrollTop = $(window).scrollTop() + winH/2,
       count = $section.length;
   
   for(var i=0; i<count; i++){
     if(scrollTop >= winH * i && scrollTop < winH*(i+1)){
       $gnb.children().removeClass();
       $gnb.find('a').eq(i).addClass('on');
     }
   }
   
 });
  
 //스크롤 이벤트 실행 
 $(window).trigger('scroll');
	
	
		var $win = $(window),
				currentIndex = 0,
				sp = 1500,
				easing = 'easeOutSine';

	 var $img1 = $('.parallax').children('#pic1-line'),
	 			$img2 = $('.parallax').children('#pic2-line'),
	 			$img3 = $('.parallax').children('#pic3-line'),
	 			$img4 = $('.parallax').children('#pic4-line'),
 				$img5 = $('.parallax').children('#pic5-line'),
 				$imgSun = $('.parallax').children('#pic-sun'),
 				$imgBl1 = $('.parallax').children('#pic-bl1'),
 				$imgBl2 = $('.parallax').children('#pic-bl2');

  $win.mousemove(function (e) {
    //마우스 좌표값 변수에 저장하기
    var mx = e.pageX,
        my = e.pageY;

		//좌표값에 나누기를 쓴 이유는 움직임값을 줄이기 위해
    $img1.css({
      left: 50 + (mx/400) + 'vw',
      top: 10 + (my/400) + 'vh',
    });
    $img2.css({
      left: 50 + (mx/390) + 'vw',
      top: 10 + (my/390) + 'vh'
    });
    $img3.css({
      left: 50 + (mx/380) + 'vw',
      top: 10 + (my/380) + 'vh'
    });
    $img4.css({
      left: 50 + (mx/370) + 'vw',
      top: 10 + (my/370) + 'vh'
    });
    $img5.css({
      left: 50 + (mx/360) + 'vw',
      top: 10 + (my/360) + 'vh'
    });
		/*pic-sun*/
		$imgSun.css({
      left: 20 + (mx/100) + 'vw',
    });
		/*pic-bl1 bl2*/
    $imgBl1.css({
      left: 5 + (mx/600) + 'vw',
      top: 20 + (my/150) + 'vh'
    });
    $imgBl2.css({
      left: 80 + (mx/550) + 'vw',
      top: 35 + (my/100) + 'vh'
    });
  
  });
  
});


























