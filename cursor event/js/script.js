$(document).ready(function(){
     
    const $bigBall = document.querySelector(".cursor__ball--big");
    const $smallBall = document.querySelector(".cursor__ball--small");
    const $hoverables = document.querySelectorAll(".hoverable");

    // Listeners
    document.body.addEventListener("mousemove", onMouseMove);
    for (let i = 0; i < $hoverables.length; i++) {
      $hoverables[i].addEventListener("mouseenter", onMouseHover);
      $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
    }

    // Move the cursor
    function onMouseMove(e) {
      TweenMax.to($bigBall, 0.4, {
        x: e.pageX - 20,
        y: e.pageY - 20
      });
      TweenMax.to($smallBall, 0.1, {
        x: e.pageX - 5,
        y: e.pageY - 7
      });
    }

    // Hover an element
    function onMouseHover() {
      TweenMax.to($bigBall, 0.3, {
        scale: 8
      });
    }
    function onMouseHoverOut() {
      TweenMax.to($bigBall, 0.3, {
        scale: 1
      });
    }





}); // END READY

$(window).on('load', function(){
    
}); // END LOAD

$(window).on('resize', function(){
    equalheight('.equal-height');
}); // END RESIZE

$(window).on('scroll', function(){

    // ** STICKY OR FIXED JS
    // if ($(this).scrollTop() > 50){  
    //     $('.header').addClass("sticky");
    // }
    // else{
    //     $('.header').removeClass("sticky");
    // }

}); // END SCROLL


// ** EQUAL HEIGHT JS
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 jQuery(container).each(function() {

   $el = jQuery(this);
   jQuery($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
// ** END EQUAL HEIGHT JS