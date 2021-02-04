document.addEventListener("DOMContentLoaded", function () {
	let lazyloadImages = document.querySelectorAll("img.lazy");
	lazyloadImages = Array.from(lazyloadImages);
	for (i in lazyloadImages) console.log(lazyloadImages[i]);
	let lazyloadThrottleTimeout;

	function lazyload() {
		if (lazyloadThrottleTimeout) {
			// if already timeour exists
			clearTimeout(lazyloadThrottleTimeout);
		}

		function loadImages() {
			var scrollTop = window.pageYOffset;
			lazyloadImages.forEach(function (img, index) {
				if (img.offsetTop < window.innerHeight + scrollTop) {
					console.log("lazy loading..");
					img.src = img.dataset.src;
					img.classList.remove("lazy");
					console.log(typeof lazyloadImages);
					lazyloadImages.splice(index, 1); // removes the image to prevent further calls to lazy load for this
				}
			});
			if (lazyloadImages.length == 0) {
				document.removeEventListener("scroll", lazyload);
				window.removeEventListener("resize", lazyload);
				window.removeEventListener("orientationChange", lazyload);
			}
		}

		lazyloadThrottleTimeout = setTimeout(loadImages, 50);
	}

	//add event listeners throughout the page
	document.addEventListener("scroll", lazyload);
	window.addEventListener("resize", lazyload);
	window.addEventListener("orientationChange", lazyload);
});
