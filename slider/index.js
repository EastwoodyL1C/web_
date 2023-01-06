function carouselFn(){
    if ($(window).width() < 768){
       $(".owl-carousel").owlCarousel({
   
        items:1,
        margin:10,
        loop:true,
        });
     }
     else{
      $(".owl-carousel").owlCarousel({
   
       items:2,
       margin:20,
       loop:true,
      });
     }
    };
   
    $(document).ready(function() {
        carouselFn();
   });
   $(window).resize(function(){
        carouselFn();     
    });