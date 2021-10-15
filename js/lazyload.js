document.addEventListener("DOMContentLoaded", function () {
  var lazyImages = document.querySelectorAll("img.lazy");

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          lazyImageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(function (img) {
      lazyImageObserver.observe(img);
    });
  } else {
    // if intersection observer doesnt exist on browser
    // load images at once
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
      img.classList.remove("lazy");
    });
  }
});
