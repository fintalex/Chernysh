jQuery(document).ready(function($){
	//initialise stellar.js
	$(window).stellar();
	var links = $('.navigation').find('li');
	slide = $('.slide');
	button = $('.button');
	mywindow = $(window);
	htmlbody = $('html,body');
	//setup waypoints plugin
	slide.waypoint(function (event, direction){
		//cache the variable of the data-slide attribute associated with each slede
		dataslide = $(this).attr('data-slide');
		//if the use scrolls up change the navigation link has the same data-slide attribute as the slide to active and 
		// romove the active class from the previous navigation link
		if (direction === 'down'){
			$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
		}
		// else if the user scrolls down change the navigation link that has the same data-slide attribute as the slide to activ
		// remove the active class from the next navigation link
		else {
			$('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
		}
	});

	//waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that remove 
	//from navigation link slide 2 and adds it to navigation link slide 1.
	mywindow.scroll(function(){
		if (mywindow.scrollTop() == 0){
			$('.navigation li[data-slide="1"]').addClass('active');
			$('.navigation li[data-slide="2"]').removeClass('active');
		}
	});
	//create a vunction that will be passed a slide munber and then will scroll to that slide useing jquerys animate. The jquery 
	// easing plugin is also used, so we passed in the eassin method of 'easeInOutOuin' which is available throught the plugin
	function goToByScroll(dataslide){
		htmlbody.animate({
			scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
		}, 2000, 'easeInOutQuint');
	}
	// when the user click on the navigation links, get the data-slide attribute balue of the link and pass that variable to the 
	links.click(function(e){
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});
	// when the use clicks on the button, get the data-slide attribute value of the button and pass that variable to the 
	button.click(function(e){
		e.preventDefault();
		dataslide = $(this).attr('data-slide');
		goToByScroll(dataslide);
	});
});