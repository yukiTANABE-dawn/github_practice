;(function($, window, document) {
	'use strict';



	/* ---------------------------------------------
	*   Class
	--------------------------------------------- */
	function Conf() {

		this.browser = this.getBrowser();
		this.device = this.getDevice();

	};



	/* ---------------------------------------------
	*   Interfaces
	--------------------------------------------- */
	Conf['prototype']['setCommonJqObjects'] = setCommonJqObjects;
	Conf['prototype']['setBreakPoints'] = setBreakPoints;
	Conf['prototype']['getBrowser'] = getBrowser;
	Conf['prototype']['getDevice'] = getDevice;
	Conf['prototype']['isBrowser'] = isBrowser;
	Conf['prototype']['isIE'] = isIE;
	Conf['prototype']['isIE9'] = isIE9;
	Conf['prototype']['isIE10'] = isIE10;
	Conf['prototype']['isIE11'] = isIE11;
	Conf['prototype']['isEdge'] = isEdge;
	Conf['prototype']['isFF'] = isFF;
	Conf['prototype']['isSafari'] = isSafari;
	Conf['prototype']['isChrome'] = isChrome;
	Conf['prototype']['isDevice'] = isDevice;
	Conf['prototype']['isMobile'] = isMobile;
	Conf['prototype']['isTablet'] = isTablet;
	Conf['prototype']['isPC'] = isPC;
	Conf['prototype']['isWindows'] = isWindows;
	Conf['prototype']['isMac'] = isMac;



	/* ---------------------------------------------
	*   Implements
	--------------------------------------------- */
	function setCommonJqObjects() {

		var that = this;

		that.$window = $(window);
		that.$document = $(document);
		that.$html = $('html');
		that.$body = $('body');
		that.$header = $('.header');
		that.$gnav = $('.gnav');
		that.$sidebar = $('.sidebar');
		that.$footer = $('.footer');

	}

	function setBreakPoints(breakPoints) {

		var that = this;

		var defaults = {
			'sp': 738,
			'tb': null,
			'pc': null
		}

		that.breakPoints = $.extend({}, defaults, breakPoints);

	}

	function getBrowser() {

		var ua = navigator.userAgent.toLowerCase();
		var ver = navigator.appVersion.toLowerCase();

		if (ua.indexOf('msie') !== -1) {
			if (ver.indexOf('msie 8.') !== -1) {
				return 'ie8';
			}
			if (ver.indexOf('msie 9.') !== -1) {
				return 'ie9';
			}
			if (ver.indexOf('msie 10.') !== -1) {
				return 'ie10';
			}
			return 'ie';
		}
		if (ua.indexOf('trident/7') !== -1) {
			return 'ie11';
		}
		if (ua.indexOf('edge') !== -1) {
			return 'edge';
		}
		if (ua.indexOf('chrome') !== -1) {
			return 'chrome';
		}
		if (ua.indexOf('safari') !== -1) {
			return 'safari';
		}
		if (ua.indexOf('firefox') !== -1) {
			return 'firefox';
		}
		return 'unknown';

	}

	function getDevice() {

		var ua = navigator.userAgent.toLowerCase();

		if (ua.indexOf('iphone') !== -1) {
			return 'iphone';
		}
		if (ua.indexOf('ipad') !== -1) {
			return 'ipad';
		}
		if (ua.indexOf('android') !== -1) {
			if (ua.indexOf('mobile') !== -1) {
				return 'android';
			}
			return 'androidTablet';
		}
		if (ua.indexOf('win') !== -1) {
			return 'windows';
		}
		if (ua.indexOf('mac') !== -1) {
			return 'mac';
		}
		return 'unknown';

	}

	function isBrowser(browser) {

		if (browser.toLowerCase() === 'ie') {
			browser = ['ie9', 'ie10', 'ie11'];
		}

		var type = jQuery.type(browser);

		if (type === 'undefined' || type === 'null') {
			return false;
		}

		if (type === 'string') {
			return (this.browser === browser.toLowerCase());
		}

		if (type === 'array') {
			for (var i = 0, l = browser.length; i < l; i++) {
				if (this.browser === browser[i].toLowerCase()) {
					return true;
				}
			}
			return false;
		}

		return false;

	}

	function isIE() {

		return isBrowser(['ie9', 'ie10', 'ie11']);

	}

	function isIE9() {

		return this.isBrowser('ie9');

	}

	function isIE10() {

		return this.isBrowser('ie10');

	}

	function isIE11() {

		return this.isBrowser('ie11');

	}

	function isEdge() {

		return this.isBrowser('edge');

	}

	function isFF() {

		return this.isBrowser('firefox');

	}

	function isSafari() {

		return this.isBrowser('safari');

	}

	function isChrome() {

		return this.isBrowser('chrome');

	}

	function isDevice(device) {

		var type = jQuery.type(device);

		if (type === 'undefined' || type === 'null') {
			return false;
		}

		if (type === 'string') {
			return (this.device === device.toLowerCase());
		}

		if (type === 'array') {
			for (var i = 0, l = device.length; i < l; i++) {
				if (this.device === device[i].toLowerCase()) {
					return true;
				}
			}
			return false;
		}

		return false;

	}

	function isMobile() {

		return this.isDevice(['iphone', 'android']);

	}

	function isTablet() {

		return this.isDevice(['ipad', 'androidTablet']);

	}

	function isPC() {

		return this.isDevice(['windows', 'mac']);

	}

	function isWindows() {

		return this.isDevice('windows');

	}

	function isMac() {

		return this.isDevice('mac');

	}

	/* ---------------------------------------------
	*   Export to global context
	--------------------------------------------- */
	window.Conf = Conf;

})(jQuery, window, document);