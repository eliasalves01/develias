/*	Copyright (c) 2022 Dev.Elias 
        PRODUZIDO NO BRASIL 😁😁😁😁😁 */

jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	eliasdev_tm_modalbox();
	eliasdev_tm_counter();
	eliasdev_tm_trigger_menu();
	eliasdev_tm_service_popup();
	eliasdev_tm_modalbox_news();
	eliasdev_tm_modalbox_portfolio();
	progress_by_frenify();
	eliasdev_tm_cursor();
	eliasdev_tm_imgtosvg();
	eliasdev_tm_popup();
	eliasdev_tm_data_images();
	eliasdev_tm_contact_form();
	eliasdev_tm_owl_carousel();
	eliasdev_tm_down();
	eliasdev_tm_nav_bg();
	hashtag();
	filter_hashtag();
	service_hashtag();
	eliasdev_tm_totop();
	eliasdev_tm_about_tabs();
	
	jQuery(window).load('body', function(){
		eliasdev_tm_my_load();
		setTimeout(function() {
			eliasdev_tm_portfolio_masonry();
		}, 500);
	});
	
	jQuery(window).on('scroll', function(){
		eliasdev_tm_progress_line();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------   COUNTER    -------------------
// -----------------------------------------------------

function eliasdev_tm_counter(){
	
	"use strict";
	
	$('.counter_item').each(function() {
		
		var el		= $(this);
			el.waypoint({
				handler: function(){
					if(!el.hasClass('stop')){
						el.addClass('stop').countTo({
							refreshInterval: 50,
							formatter: function (value, options) {
								return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
							},	
						});
					}
				},offset:'95%'	
			});
		});	
}

// -----------------------------------------------------
// --------------------   MODALBOX    ------------------
// -----------------------------------------------------

function eliasdev_tm_modalbox(){
	
	"use strict";
	
	jQuery('.eliasdev_tm_all_wrap').prepend('<div class="eliasdev_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function eliasdev_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.trigger .hamburger');
	var mobileMenu		= jQuery('.eliasdev_tm_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.eliasdev_tm_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -------------------------------------------------
// -------------  SERVICE POPUP  -------------------
// -------------------------------------------------

function eliasdev_tm_service_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.eliasdev_tm_modalbox');
	var button			= jQuery('.eliasdev_tm_service .eliasdev_tm_full_link');
	var list			= jQuery('.eliasdev_tm_service .service_list ul li');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element = jQuery(this);
		var parent  = element.closest('li');
		var elImage	= parent.find('.popup_service_image').attr('src');
		list.removeClass('current');
		parent.addClass('current');
		var title	= parent.find('.left .title').text();
		var content = parent.find('.service_hidden_details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.service_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+elImage+'"></div></div>');
		eliasdev_tm_data_images();
		modalBox.find('.service_popup_informations .image').after('<div class="main_title"><h3>'+title+'</h3></div>');
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function eliasdev_tm_modalbox_news(){
	
	"use strict";
	
	var modalBox		= jQuery('.eliasdev_tm_modalbox');
	var button			= jQuery('.eliasdev_tm_news .eliasdev_tm_full_link,.eliasdev_tm_news .title a,.eliasdev_tm_news .eliasdev_tm_simple_button a');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('.list_inner');
		var content 	= parent.find('.news_hidden_details').html();
		var image		= element.closest('.list_inner').find('.right .main').data('img-url');
		var metabox	 	= parent.find('.metabox').html();
		var title	 	= parent.find('.title a').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details"><div class="metabox">'+metabox+'</div><div class="title"><h3>'+title+'</h3><div><div>');
		eliasdev_tm_data_images();
		eliasdev_tm_imgtosvg();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX PORTFOLIO  --------------
// -------------------------------------------------

function eliasdev_tm_modalbox_portfolio(){
	
	"use strict";
	
	var modalBox		= jQuery('.eliasdev_tm_modalbox');
	var button			= jQuery('.eliasdev_tm_portfolio .details_link');
	var closePopup		= modalBox.find('.close');
	
	button.off().on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('.list_inner');
		var content	 	= parent.find('.hidden_content').html();
		var image		= parent.find('.image .main').data('img-url');
		var category 	= parent.find('.details .category').text();
		var title	 	= parent.find('.details .title').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title"><span><a href="#">'+category+'</a></span><h3>'+title+'</h3><div>');
		eliasdev_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		var number 			= progress.find('.number');
		var label 			= progress.find('.label');
		number.css({right:(100 - pValue)+'%'});
		setTimeout(function(){label.addClass('opened');},500);
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}
function progress_by_frenify(wrapper){
	
	"use strict";
	
	var element;
	if(wrapper){
		element = wrapper.find('.dodo_progress');
	}else{
		element = jQuery('.dodo_progress');
	}
	element.each(function() {
		var pWrap = jQuery(this);
		pWrap.find('.number').css({right:'100%'});
		pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	});
}

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function eliasdev_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 1000);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function eliasdev_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){eliasdev_tm_preloader();},speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function eliasdev_tm_cursor(){
	
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
		const e = document.querySelector(".cursor-inner"),
		t = document.querySelector(".cursor-outer");
		let n, i = 0,
		o = !1;
		window.onmousemove = function (s) {
		o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
		}, $("body").on("mouseenter", "a, .eliasdev_tm_testimonials .avatars ul li, .cursor-pointer", function () {
		e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
		}), $("body").on("mouseleave", "a, .eliasdev_tm_testimonials .avatars ul li, .cursor-pointer", function () {
		$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
		}), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function eliasdev_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function eliasdev_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function eliasdev_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function eliasdev_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('.contact_form .empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function eliasdev_tm_owl_carousel(){

	"use strict";
	
	var carousel			= jQuery('.eliasdev_tm_portfolio .owl-carousel');
	
	var rtlMode	= false;

	if(jQuery('body').hasClass('rtl')){
		rtlMode = 'true';
	}
	
	carousel.each(function(){
		var element = jQuery(this);		
		
		element.owlCarousel({
			loop: false,
			items: 3,
			lazyLoad: false,
			margin: 30,
			autoplay: true,
			autoplayTimeout: 7000,
			rtl: rtlMode,
			dots: true,
			nav: false,
			navSpeed: false,
			responsive : {
				0 : {
					items: 1
				},
				768 : {
					items: 2
				},
				1040 : {
					items: 3
				}
			}
		});

		element.parent().find('.next_button').click(function() {
			element.trigger('next.owl.carousel');
			return false;
		});
		// Go to the previous item
		element.parent().find('.prev_button').click(function() {
			// With optional speed parameter
			// Parameters has to be in square bracket '[]'
			element.trigger('prev.owl.carousel');
			return false;
		});
		
	});
	
	var carousel2			= jQuery('.eliasdev_tm_partners .owl-carousel');

	carousel2.owlCarousel({
		loop: true,
		items: 5,
		lazyLoad: false,
		margin: 50,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: true,
		nav: false,
		navSpeed: true,
		responsive:{
			0:{items:2},
			480:{items:2},
			768:{items:3},
			1040:{items:4},
			1200:{items:5},
			1600:{items:5},
			1920:{items:5}
		}
	});
	
}

// -------------------------------------------------
// -----------------  GRID MASONRY  ----------------
// -------------------------------------------------

$('.grid').masonry({
	itemSelector: '.grid-item',
});


// ------------------------------------------------
// -------------------  ANCHOR --------------------
// ------------------------------------------------

jQuery('.anchor_nav').onePageNav();

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function eliasdev_tm_down(){
	
	"use strict";
	
	var header = jQuery('.eliasdev_tm_header').height();
		
	jQuery('.anchor').on('click',function(){
		
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top-header
			}, 800);
		}
		
		return false;
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// ------------    WAIT FOR IMAGES   -------------------
// -----------------------------------------------------

$('.portfolio_list').waitForImages().done(function() {
	"use strict";
	eliasdev_tm_portfolio_masonry();
});

function eliasdev_tm_portfolio_masonry(){
	"use strict";
	
	$('.grid').masonry({
		itemSelector: '.grid-item',
	});
}



// -------------------------------------------------
// -------------   TOPBAR BG SCROLL  ---------------
// -------------------------------------------------

function eliasdev_tm_nav_bg(){
	
	"use strict";
	
	jQuery(window).on('scroll',function(){
		var menu	 		= jQuery('.eliasdev_tm_header');
		var progress	 	= jQuery('.progressbar');
		var WinOffset		= jQuery(window).scrollTop();
		
		if(WinOffset >= 100){
			menu.addClass('animate');
			progress.addClass('animate');
		}else{
			menu.removeClass('animate');
			progress.removeClass('animate');
		}
	});
}

function hashtag(){
	"use strict";
	
	var ccc 			= $('.eliasdev_tm_header .menu .ccc');
	var element 		= $('.eliasdev_tm_header .menu .current a');
	$('.eliasdev_tm_header .menu a').on('mouseenter',function(){
		var e 			= $(this);
		currentLink(ccc,e);
	});
	$('.eliasdev_tm_header .menu').on('mouseleave',function(){
		element 		= $('.eliasdev_tm_header .menu .current a');
		currentLink(ccc,element);
	});
	currentLink(ccc,element);
	
}

function currentLink(ccc,e){
	"use strict";
	
	if(!e.length){return false;}
	var left 		= e.offset().left;
	var width		= e.outerWidth();
	var menuleft 	= $('.eliasdev_tm_header .menu').offset().left;
	ccc.css({left: (left-menuleft) + 'px',width: width + 'px'});
}

function filter_hashtag(){
	"use strict";
	
	var ccc 			= $('.eliasdev_tm_informations .right .filter .ccc');
	var element 		= $('.eliasdev_tm_informations .right .filter .current');
	$('.eliasdev_tm_informations .right .filter a').on('mouseenter',function(){
		var e 			= $(this);
		currentLinkFilter(ccc,e);
	});
	$('.eliasdev_tm_informations .right .filter').on('mouseleave',function(){
		element 		= $('.eliasdev_tm_informations .right .filter .current');
		currentLinkFilter(ccc,element);
	});
	currentLinkFilter(ccc,element);
	
}

function currentLinkFilter(ccc,e){
	"use strict";
	
	if(!e.length){return false;}
	var left 		= e.offset().left;
	var width		= e.outerWidth()+80;
	var menuleft 	= $('.eliasdev_tm_informations .right .filter').offset().left;
	ccc.css({left: (left-menuleft-40) + 'px',width: width + 'px'});
}

function service_hashtag(){
	"use strict";
	
	var ccc 			= $('.eliasdev_tm_service .ccc');
	var element 		= $('.eliasdev_tm_service .current');
	$('.eliasdev_tm_service .service_list ul li').on('mouseenter',function(){
		var e 			= $(this);
		currentLinkService(ccc,e);
	});
	$('.eliasdev_tm_service .service_list').on('mouseleave',function(){
		element 		= $('.eliasdev_tm_service .current');
		currentLinkService(ccc,element);
		element.closest('li').siblings().removeClass('mleave');
	});
	currentLinkService(ccc,element);
	
}

function currentLinkService(ccc,e){
	"use strict";
	
	if(!e.length){return false;}
	var topOff 		= e.offset().top;
	var height		= e.outerHeight();
	var menuTop 	= $('.eliasdev_tm_service .service_list').offset().top;
	e.closest('li').removeClass('mleave');
	e.closest('li').siblings().addClass('mleave');
	ccc.css({top: (topOff-menuTop) + 'px',height: height + 'px'});
}

// -----------------------------------------------------
// -------------------    TOTOP    ---------------------
// -----------------------------------------------------

function eliasdev_tm_totop(){
  
	"use strict";
	
	var text = $('.progressbar .text');
	text.css({bottom: 105 + text.width()});
	$(".progressbar a").on('click', function(e) {
		e.preventDefault();    
		$("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
	
}

// -----------------------------------------------------
// ----------------    PROGRESS LINE    ----------------
// -----------------------------------------------------

function eliasdev_tm_progress_line(){
	
	"use strict";
	
	var line			= jQuery('.progressbar .line');
	var documentHeight 	= jQuery(document).height();
	var windowHeight 	= jQuery(window).height();
	var winScroll 		= jQuery(window).scrollTop();
	var value 			= (winScroll/(documentHeight-windowHeight))*100;
	var position 		= value;

	line.css('height',position+"%");
}

// -----------------------------------------------------
// ------------------    ABOUT TABS    -----------------
// -----------------------------------------------------

function eliasdev_tm_about_tabs(){
	"use strict";
	
	var button		= jQuery('.eliasdev_tm_informations .right .filter ul li a');
	var tabList		= jQuery('.eliasdev_tm_informations .right .content .wrapper');
	
	button.on('click',function(){
		var element		= jQuery(this);
		var elAttr		= element.attr('data-tab');
		button.removeClass('current');
		tabList.removeClass('current');
		element.addClass('current');
		jQuery("#"+elAttr).addClass('current');
		return false;
	});
}
/*	Copyright (c) 2022 Dev.Elias 
        PRODUZIDO NO BRASIL 😁😁😁😁😁 */
//===========
//===========
//============



const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Hello World! ", "Seja-Bem vindo.", "Descubra o novo!"];
const typingDelay = 250;
const erasingDelay = 100;
const newTextDelay = 3000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
