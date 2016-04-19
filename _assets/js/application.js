//= require_self
jQuery(function($){

	// Add random class to body
	var bgCount = 4;
	var randomBg = Math.floor(Math.random() * bgCount) + 1
	var randomBgClass = 'bg-' + randomBg  ; 
	$("body.page-home").addClass(randomBgClass);
	
	// setInterval(function(){
	// 	var bgCount = 4;
	// 	var randomBg = Math.floor(Math.random() * bgCount) + 1
	// 	var randomBgClass = 'bg-' + randomBg  ; 
	// 	$("body.page-home").toggleClass(randomBgClass);

	// }, 5000); 

	// /alpha/home-ff1/
	$("body.page-home-1").addClass('bg-ff');
	setInterval(function(){
		var bgClasses = ['primary', 'secondary', 'light', 'dark', 'black'];
		var newClass = 'bg-ff-' + bgClasses[Math.floor(Math.random() * bgClasses.length)];
		$("body.page-home-1").toggleClass(newClass);

	}, 7000); 
	
	// $("body.page-home-3 .splash-home-cta").addClass('bg-ff');
	// setInterval(function(){
	// 	var bgClasses = ['primary', 'secondary', 'dark', 'black'];
	// 	var newClass = 'bg-ff-' + bgClasses[Math.floor(Math.random() * bgClasses.length)];
	// 	$("body.page-home-3 .splash-home-cta").toggleClass(newClass);

	// }, 6000); 

});

"use strict";
var FCTXFXNS;
FCTXFXNS = function() {
	function homeRandomBgImage() {
		if($('body.page-home-0').length !== 0) {
			var bgCount = 4;
			var randomBg = Math.floor(Math.random() * bgCount) + 1
			var randomBgClass = 'bg-' + randomBg  ; 
			$b.addClass(randomBgClass);	
		}	
	}

	// Put your custom functions in here
	function navigation() {
	   /*
	    * Add class to responsive main menu so we don't hide the links in case no-js
	    */
	  $b.addClass('js');

	  /*
	   * Behaviours for clicks
	  **/
	  $navToggle.click(function(e) {
	  		e.preventDefault();

	  		$b.toggleClass('clip');
	    	$nav.toggleClass('open');
		    $navToggle.toggleClass('active');
		    $navLayer.toggleClass('active');
	  });
	}

	var $b = $('body');
	var $nav = $('nav.pure-menu');
    var $navLayer = $('nav.pure-menu .nav-background');
    var $navToggle = $('nav.pure-menu #pure-menu-toggle');


    return {
        init: function() {
            window.console || (window.console = {
                log: function() {}
            })
            , navigation(), homeRandomBgImage()
            // , d(), nt(), c(), pt(), it(), w(), kt(), gt(), ni()
        }
        // ,showOverlay: l
        // ,closeOverlay: e
        // ,getWindowHeight: h
        // ,equalizeHeights: wt
    }
}(), $(FCTXFXNS.init)	