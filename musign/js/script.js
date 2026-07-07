//01.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault()
    });

//02.SVG path의 길이구하기
$(function(){
    $('.svgAni').find('path').each(function(i, path){
        var totalLength = path.getTotalLength();
        //alert(totalLength);
    });
});

//03.햄버거메뉴
$(function(){
    $('.menuOpen button.open').on('click', function(){
        $('.menuOpen .menuWrap').addClass('on');
});
$('.menuOpen .menuWrap .close').on('click', function(){
    $('.menuOpen .menuWrap').removeClass('on');
    });
});


//04.scrolla.js
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
}); 


//배경색변경 
$(window).on('scroll resize', function(){
    let scrollTop = $(document).scrollTop();
    bgColor();


    function bgColor() {
        if(scrollTop > 1400) {
            $('body').addClass('on');
        }else {
            $('body').removeClass('on');
        }
        if(scrollTop > 2700) {
            $('body').removeClass('on');
        }
    }
})