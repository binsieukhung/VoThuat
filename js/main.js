$(document).ready(function(){			
	$('.slide_news_one').bxSlider({
	  mode: 'fade',
	  auto:true,
	  autoHover:true,
	  pager:false
	});
	$('.slide_video_two').bxSlider({
	minSlides: 1,
		maxSlides: 2,
		moveSlides: 1,
		slideWidth: 650,
		slideMargin: 20,
	  auto:true,
	  autoHover:true,
	  
	});
	$('.slide_video_three').bxSlider({
	minSlides: 1,
		maxSlides: 2,
		moveSlides: 1,
		slideWidth: 650,
		slideMargin: 20,
	  auto:true,
	  autoHover:true,
	  
	});
	
	$('#slide_detail').bxSlider({
		minSlides: 1,
		maxSlides: 5,
		moveSlides: 4,
		slideWidth: 250,
		slideMargin: 20,
	  auto:true,
	  autoHover:true,
	  
	});
	
	$('.list_notify').show().marquee({
		//speed in milliseconds of the marquee
		duration: 20000,
		//gap in pixels between the tickers
		gap: 20,
		//time in milliseconds before the marquee will start animating
		delayBeforeStart: 0,
		//'left' or 'right'
		direction: 'left',
		//true or false - should the marquee be duplicated to show an effect of continues flow
		duplicated: true,
		pauseOnHover:1
	});
});
$(function(){
	  $('#scroll_news_hot').slimScroll({
		  height: '430px',
	
		  borderRadius: '0',
		  color: '#666',
		  opacity : 0.7,
	  });
	  $('#scrol_news_update').slimScroll({
		  height: '490px',
		
		  borderRadius: '0',
		  color: '#555555',
		  opacity : 1,
	  });

});
$(document).ready(function(){

	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

});

$(document).ready(function() {
	$('.user_log').fancybox();


$(".button_menu_mobile").click(function() {
    $('.shadown_menu').toggleClass('active');
    $('.menu_left_mobile').toggleClass('active');
    $('.button_menu_mobile').toggleClass('active');

});

$(".shadown_menu").click(function() {
    $('.shadown_menu').removeClass('active');
    $('.menu_left_mobile').removeClass('active');
    $('.button_menu_mobile').removeClass('active');

});

});
$(window).scroll(function() {
if ($(this).scrollTop() > 120){  
    $('.navigation').addClass("sticky_main");
  }
  else{
    $('.navigation').removeClass("sticky_main");
  }
});

/*Count down*/
$(function(){
	
	var note = $('#note');
	
    if($('#countdown_eventtop').length>0) {
        var dateString = $('#countdown_eventtop').attr('data-time');
        var reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/;
        var dateArray = reggie.exec(dateString); 
        var ts = new Date(
            (+dateArray[1]),
            (+dateArray[2])-1, // Careful, month starts at 0!
            (+dateArray[3]),
            (+dateArray[4]),
            (+dateArray[5]),
            (+dateArray[6])
        );
    	$('#countdown_event300').countdown({
    		timestamp	: ts,
    		callback	: function(days, hours, minutes, seconds){
    			
    			var message = "";
    			
    			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
    			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
    			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
    			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
    			note.html(message);
    		}
    	});
    	$('#countdown_eventtop').countdown({
    		timestamp	: ts,
    		callback	: function(days, hours, minutes, seconds){
    			
    			var message = "";
    			
    			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
    			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
    			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
    			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
    			
    			note.html(message);
    		}
    	});
    }
	
});
$(document).ready(function(){
      $("li.search_app").hover(function(){
        $(".hide_search").toggle("slide");
      });
      $("li.search_app_mobile").click(function(){
        $(".hide_search_mobile").toggle("slide");
      });
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });
      $(".list_youtube .box").click(function(){
          var dir = $(this).attr("dir");
          $(".link_youtube iframe").attr("src",dir);
          $(this).parent().parent().parent().children().children().children().removeClass("active");
          $(this).addClass("active");
          return false;
          // alert("ok");
      });
      // $('.list_youtube').slick({
      //   slidesToShow: 1,
      // });
		$("li.user_login").click(function(){
	        $(".box_user").slideToggle();
	    });
});
$(document).ready(function(){
    $(".khoedep_nav li a").click(function(){
        var number = $(this).attr("number");
        $(".khoedep_nav li a").removeClass("active");
        $(this).addClass("active");
        $(".contentTab").hide();
        $(".contentTab"+number).show();
    });
      $('.slider').slick({
         infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
      $('.rating label').hover(function(){
        $(this).prevAll('label').addClass('hover');
        $(this).addClass('hover');
      },
      function() {
        $('.rating label').removeClass('hover');
      });

      $('.rating label').on("click",function(){
        $(this).prevAll('.rating label').addClass('fakehover');
        $(this).nextAll('.rating label').removeClass('fakehover');
        $(this).parent().children('label').removeClass('checked');
        $(this).removeClass('hover fakehover').addClass('checked');
      });
            $(".list_youtube").slick({
                vertical: true,
                slidesToShow: 3,
                // infinite: false,  
            });
            $(".list_youtube").jCarouselLite({
                vertical: true,
                btnNext: ".icon-up",
                btnPrev: ".icon-down",
                hoverPause: true,
                visible: 3,
                // auto: 1800,
                speed: 500
            });
        
});