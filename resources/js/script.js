$(document).ready(function () {
  $(".js--about-section").waypoint(
    function (direction) {
      $(".about-header").addClass("animate__animated animate__backInLeft animate__delay-6s");
    },
    { offset: "70%" }
  );

  $(".js--services-section").waypoint(
    function (direction) {
      $(".services-header").addClass("animate__animated animate__backInLeft");
    },
    { offset: "70%" }
  );
  $(".js--dogs-section").waypoint(
    function (direction) {
      $(".dogs-header").addClass("animate__animated animate__backInLeft");
    },
    { offset: "70%" }
  );

  var currentIndex = 0;
  var slides = $(".header-slide");
  var slideCount = slides.length;

  slides.hide().eq(currentIndex).show();

  setInterval(function () {
    slides.eq(currentIndex).fadeOut(1000, function () {
      currentIndex = (currentIndex + 1) % slideCount;
      slides.eq(currentIndex).fadeIn(1000);
    });
  }, 5000);

  //Slider effect starts
  var container = $(".container");
  var scrollLeft = $(".scroll-left");
  var scrollRight = $(".scroll-right");

  scrollLeft.click(function (event) {
    event.preventDefault();
    container.animate({ scrollLeft: "-=200px" }, "slow");
  });

  scrollRight.click(function (event) {
    event.preventDefault();
    container.animate({ scrollLeft: "+=200px" }, "slow");
  });

  var container = $(".container");
  var row = $(".row");
  var col = $(".col");
  var scrollLeft = $(".scroll-left");
  var scrollRight = $(".scroll-right");
  var colWidth = col.width();
  var colsPerView = 3;
  var scrollAmount = colWidth * colsPerView;

  scrollLeft.click(function (event) {
    event.preventDefault();
    container.animate({ scrollLeft: "-=" + scrollAmount }, "slow");
  });

  scrollRight.click(function (event) {
    event.preventDefault();
    container.animate({ scrollLeft: "+=" + scrollAmount }, "slow");
  });

  // Disable left arrow initially since we're scrolled all the way to the left
  scrollLeft.prop("disabled", true);

  // Update arrow disable states and scroll position when container is scrolled
  container.scroll(function () {
    var scrollLeftPos = container.scrollLeft();
    var maxScrollLeftPos = container.prop("scrollWidth") - container.width();

    // Enable/disable arrow buttons based on scroll position
    scrollLeft.prop("disabled", scrollLeftPos === 0);
    scrollRight.prop("disabled", scrollLeftPos === maxScrollLeftPos);

    // Snap to nearest column when scrolling stops
    clearTimeout($.data(this, "scrollTimer"));
    $.data(
      this,
      "scrollTimer",
      setTimeout(function () {
        var colIndex = Math.round(scrollLeftPos / colWidth);
        container.animate({ scrollLeft: colIndex * colWidth }, "fast");
      }, 250)
    );
  });
});
