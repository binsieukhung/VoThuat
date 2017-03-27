$('.list_notify').marquee({
		//speed in milliseconds of the marquee
		duration: 12000,
		//gap in pixels between the tickers
		gap: 0,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,
		pauseOnHover:1
	});

// // SLICK
$(document).ready(function(){
 $('.slides').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  arrows: true,
  fade: true,
  asNavFor: '.thumbnail',
  dots:false,
  // autoplay:true,
  autoplaySpeed:1000,
});
$('.thumbnail').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slides',
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  draggable: true,

});
	});	
// $(window).load(function() {
//   // The slider being synced must be initialized first
//   $('#carousel').flexslider({
//     animation: "slide",
//     controlNav: false,
//     animationLoop: false,
//     slideshow: true,
//     itemWidth: 300,
//     itemMargin: 5,
//     asNavFor: '#slider',
//   });
 
//   $('#slider').flexslider({
//     // animation: "faded",
//     controlNav: false,
//     animationLoop: true,
//     slideshow: true,
//     sync: "#carousel"
//   });
// });