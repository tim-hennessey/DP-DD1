var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();
    
    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');


    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var cta = document.getElementById('cta');

    var ctaPath = document.getElementById('ctaPath');
    var ctaTxt = document.getElementById('cta-txt');



	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {

        t.set(banner, {opacity: 1});
        t.set(ctaPath, {drawSVG:"0%"});
        t.set(ctaTxt, {scale:0, transformOrigin:"50% 50%"});

	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl1.to(img1, 2, {scale:1.15, ease: Linear.easeNone})
        .set(img1,{display:"none"})
        .set(img2,{display:"block"})
        .to(img2, 6, {scale:1.05, ease: Linear.easeNone})
        .set(img2,{display:"none"})
        .set(txt2,{display:"none"})
        .set(img3,{display:"block"})
        .from(img3, 8, {scale:.9, ease: Sine.easeOut})
        .to(ctaPath, .3, {drawSVG:"100%", ease:Sine.easeInOut}, "-=7")
        .to(ctaTxt, .5, {scale:1, ease:Elastic.easeInOut}, "-=6.75");

        tl2.from(txt1, .66, {x:"-=300", ease: Expo.easeIn}, "+=2")
        .set(txt1,{display:"none"},"+=2")
        .from(txt2, .66, {x:"-=300", ease: Expo.easeIn})
        .set(txt1,{display:"none"});

        

	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
