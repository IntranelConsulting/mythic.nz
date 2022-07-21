/* Accessible font */
var setAccessibleFont = function () {
  var root = document.documentElement;
  root.style.setProperty("--font-body", "var(--font-default-dyslexia)");
  root.style.setProperty("--font-display", "var(--font-default-dyslexia)");
  root.style.setProperty("--background-section", "var(--background-color-alt)");
};
var removeAccessibleFont = function () {
  var root = document.documentElement;
  root.style.setProperty("--font-body", "var(--font-default)");
  root.style.setProperty("--font-display", "var(--font-default-serif)");
  root.style.setProperty("--background-section", "var(--background-section-default)");
};

var toggle = false;
var dys = document.querySelector(".dyslexia");
dys.style.display = "block";
dys.addEventListener("click", function () {
  if (toggle) {
    removeAccessibleFont();
  } else {
    setAccessibleFont();
  }
  toggle = !toggle;
});

/* When videos in view, load and play */
if ("IntersectionObserver" in window) {
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.play();
        observer.unobserve(entry.target);
      }
    });
  });
  var videos = document.querySelectorAll("video");
  videos.forEach(function (video) {
    observer.observe(video);
  });
}
