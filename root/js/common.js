/* ==========================================================
[ Common JS - Index ]

※使用しないものは以下の目次、各デフォルト記述も含めて削除すること

Global Config
Set Tel Anchor
Toggle Gnav Current
Auto Height
Smooth Scroll
Toggle SP Menu
Fade in Go-top-button

========================================================== */



/* ---------------------------------------------
*   Global Config
--------------------------------------------- */


/*  Instantiate conf object
--------------------------------------------- */
/**
* Properties:
*
* device  : windows / mac / iphone / ipad / android / androidTablet
* broswer : ie / ie8 / ie9 / ie10 / ie11 / edge / chrome / safari / firefox
*/
var conf = conf || new Conf();



/*  Set common jQuery objects
--------------------------------------------- */
$(function() {

	/**
	* Default common jQuery objects:
	*
	* conf.$window   : $(window)
	* conf.$document : $(document)
	* conf.$html     : $('html')
	* conf.$body     : $('body')
	* conf.$header   : $('.header')
	* conf.$gnav     : $('.gnav')
	* conf.$sidebar  : $('.sidebar')
	* conf.$footer   : $('.footer')
	*/
	conf.setCommonJqObjects();

});


/*  Set body classes
--------------------------------------------- */
$(function() {

	/**
	* bodyClassNames : an array of class names added to <body>
	*
	* bodyClassNames = ['sample1', 'sample2']
	* ->
	* <body class="sample1 sample2">
	*/

	var bodyClassNames = [conf.device, conf.browser];
	conf.$body.addClass(bodyClassNames.join(' '))

});


/*  Set breakpoints
--------------------------------------------- */
/**
* Default breakPoints:
*
* conf.breakPoints.sp : 738
* conf.breakPoints.tb : null
* conf.breakPoints.pc : null
*/
conf.setBreakPoints({
	'sp': 738,
	'tb': null,
	'pc': null
});



/* ---------------------------------------------
*   Set Tel Anchor
--------------------------------------------- */
$(function() {

	var $tel = $('a[href^="tel:"]');

	if (!conf.isMobile()) {
		$tel.attr('href', 'javascript:void(0);').css({ 'cursor' : 'default' });
	}

});



/* ---------------------------------------------
*   Toggle Gnav Current
--------------------------------------------- */
$(function() {

	var $items = conf.$gnav.find('.gnav_lists > .item_list');
	var currentClassName = 'skin_item_current';
	var path = location.pathname;

	if (path.match('/dir01/')) {
		$items.eq(1).addClass(currentClassName);
		return;
	}

	if (path.match('/dir02/')) {
		$items.eq(2).addClass(currentClassName);
		return;
	}

	if (path.match('/dir03/')) {
		$items.eq(3).addClass(currentClassName);
		return;
	}

	if (path.match('/dir04/')) {
		$items.eq(4).addClass(currentClassName);
		return;
	}

});



/* ---------------------------------------------
*   Auto Height
--------------------------------------------- */
$(function() {

	conf.$window.on('load resize', function() {

		$('.sample_1').autoHeight({
			column : 2,
			height : 'height'
		});

		$('.sample_2').autoHeight({
			column : 2,
			height : 'height'
		});

	});

});



/* ---------------------------------------------
*   Smooth Scroll
--------------------------------------------- */
$(function() {

	$('a[href^="#"]').on('click.smoothScroll', $.proxy(smoothScroll, { duration: 400, easing: 'swing' }));

	function smoothScroll(event) {

		/*
		* In this context, `this` is supposed to be the plainObject
		* that is second argument of $.proxy method above
		* the element clicked is `event.target`
		* the element to which event listener atatched is `event.currentTarget`
		*/

		var duration = this.duration;
		var easing = this.easing;
		var href = $(event.currentTarget).attr('href');
		var $target = $(href === '#' || href === '' ? 'html' : href);
		var position;

		if (!$target[0]) {
			// do nothing...
		} else {
			position = $target.offset().top;
			$('html, body').animate({ scrollTop: position }, duration, easing);
		}

		return false;

	}

});



/* ---------------------------------------------
*   Toggle SP Menu
--------------------------------------------- */
$(function() {

	$('.js_trigger_spmenu').on('click', function() {

		$(this).toggleClass('skin_menu_open');
		$('.gnav .gnav_lists').slideToggle();

	});

});



/* ---------------------------------------------
*   Fade in Go-top-button
--------------------------------------------- */
$(function() {

	var $pageTop = $('.pagetop');
	var threshold = 400;

	conf.$window.on('scroll', function() {

		if (conf.$window.scrollTop() > threshold) {
			$pageTop.fadeIn();
		} else {
			$pageTop.fadeOut();
		}

	});

});



/* ---------------------------------------------
*   Refferal (参考：不使用の場合は削除すること)
--------------------------------------------- */



/* ---------------------------------------------
*   Responsive (User Agent)
--------------------------------------------- */
$(function() {

	if (conf.isMobile()) {
		// For SP
		return;
	}

	if (!conf.isMobile()) {
		// For PC & Tablet
		// Do not `return` here
	}

	if (conf.isTablet()) {
		// For Tablet
		return;
	}

	if (conf.isPC()) {
		// For PC
		return;
	}

});



/* ---------------------------------------------
*   Responsive (SP-to-PC / PC-to-SP)
--------------------------------------------- */
$(function() {

	conf.$window.on('toDesktop', function() {

	});

	conf.$window.on('toMobile', function() {

	});

});



/* ---------------------------------------------
*   Responsive (Window Width on Ready)
--------------------------------------------- */
$(function() {

	var windowWidth = conf.$window.width();

	if (windowWidth <= conf.breakPoints.sp) {
		// For SP
		return;
	}

	if (windowWidth <= conf.breakPoints.tb) {
		// For Tablet
		return;
	}

	// For PC

});



/* ---------------------------------------------
*   Hover Action with on
--------------------------------------------- */
$(function() {

	$('html, body').on({
		'mouseenter': function() {

		},
		'mouseleave': function() {

		}
	}, '.sample');

});



/* ---------------------------------------------
*   Animation CSS
--------------------------------------------- */
$(function() {

	$('html, body').on({
		'mouseenter': function() {

			$(this).stop().animate({
				'prop':'',
				'prop':''
			},'	1000');

		},
		'mouseleave': function() {

			$(this).children('.sample').stop().animate({
				'prop':'',
				'prop':''
			},'1000');

		}
	}, '.sample');

});



/* ---------------------------------------------
*   Pull Down by Hover
--------------------------------------------- */
$(function() {

	$('.something').on({
		'mouseenter': function() {

			$(this).children('.something_child').stop().slideDown();

		},
		'mouseleave': function() {

			$(this).children('.something_child').stop().slideUp();

		}
	});

});



/* ---------------------------------------------
*   Normal Accordion
--------------------------------------------- */
$(function() {

	$('.something').on('click', function() {

		var $this = $(this);

		$this.toggleClass('skin_item_current');
		$this.next().toggleClass('skin_item_open');

	});

});



/* ---------------------------------------------
*   Accordion Only One Item
--------------------------------------------- */
$(function() {

	$('.something .item_button').off().on('click', function() {

		var $this = $(this);
		var $parent = $this.parent();
		var activeClassName = 'skin_item_open';

		if ($parent.find('.something .item_button').hasClass(activeClassName)) {
			$parent.find('.something .item_contents').slideToggle();
			$parent.find('.something .item_button').toggleClass(activeClassName);
		} else {
			$('.something .item_button').removeClass(activeClassName);
			$('.something .item_contents').slideUp();
			$parent.find('.item_contents').slideDown();
			$parent.find('.item_button').addClass(activeClassName);
		}

	});

});



/* ---------------------------------------------
*   SP Menu for Anchor Close
--------------------------------------------- */
$(function() {

	var currentClassName = 'skin_trigger_current';

	$('.trigger').off('click').on('click', function() {

		$(this).toggleClass(currentClassName);
		$('.gnav').slideToggle();

	});

	conf.$gnav.find('ul li a').off().on('click', function() {

		$('.trigger').toggleClass(currentClassName);
		$('.gnav').slideToggle();

	});

});



/* ---------------------------------------------
*   Loading Image
--------------------------------------------- */
$(function() {

	conf.$window.on('load', function() {

		$('.js_get_image').each(function() {

			var bgImageUrl = $(this).data('image');

			$(this).css({
				'background-image': 'url(' + bgImageUrl + ')'
			});

		});

	});

});



/* ---------------------------------------------
*   Float Menu
--------------------------------------------- */
$(function() {

	if (!conf.$sidebar[0]) {
		return;
	}

	var $floatMenu = $('.floatmenu');
	var offset = $floatMenu.offset();
	var limitPos = conf.$body.height();

	conf.$window.on('scroll', function() {

		var scrollTop = conf.$window.scrollTop();

		if (limitPos < scrollTop) {
			return false;
		}

		if (scrollTop > offset.top) {
			$floatMenu.stop().animate({
				marginTop: scrollTop - offset.top
			});
		} else {
			$floatMenu.stop().animate({
				marginTop: 0
			});
		}

	});

});