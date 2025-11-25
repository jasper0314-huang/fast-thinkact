window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
	// Default carousel
	var defaultOptions = {
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  loop: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 10000,
	};
	var carousels = bulmaCarousel.attach(
		'.carousel:not(#manipulation-carousel):not(#reflection-carousel):not(#comparison-carousel)',
		defaultOptions
	  );

	// Qualitative Results carousel
	var manipulationOptions = {
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  loop: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 15000,
	};
	var manipulationCarousel = bulmaCarousel.attach('#manipulation-carousel', manipulationOptions);

	var reflectionOptions = {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 20000, // you can adjust this if needed
	  };
	  var reflectionCarousel = bulmaCarousel.attach('#reflection-carousel', reflectionOptions);

	// Comparison carousel (2x2 grid per page)
	var comparisonOptions = {
		slidesToScroll: 1,
		slidesToShow: 1,
		loop: true,
		infinite: true,
		autoplay: false, // Set to false so users can manually navigate
	  };
	  var comparisonCarousel = bulmaCarousel.attach('#comparison-carousel', comparisonOptions);

	bulmaSlider.attach();
  });