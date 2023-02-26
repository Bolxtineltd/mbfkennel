// $(document).ready(function() {
//     var currentIndex = 0;
//     var slides = $(".header-slide");
//     var slideCount = slides.length;
    
//     slides.hide().eq(currentIndex).show();
    
//     setInterval(function() {
//       slides.eq(currentIndex).fadeOut(1000);
//       currentIndex = (currentIndex + 1) % slideCount;
//       slides.eq(currentIndex).fadeIn(1000);
//     }, 5000);
//   });

$(document).ready(function() {
    var currentIndex = 0;
    var slides = $(".header-slide");
    var slideCount = slides.length;
    
    slides.hide().eq(currentIndex).show();
    
    setInterval(function() {
      slides.eq(currentIndex).fadeOut(1000, function() {
        currentIndex = (currentIndex + 1) % slideCount;
        slides.eq(currentIndex).fadeIn(1000);
      });
    }, 5000);
  });
  
  