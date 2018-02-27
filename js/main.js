/* ==================================================
 * Toggle hamburger menu
 * ==================================================
 */

function myFunction(x) {
    x.classList.toggle("change");
}



/* ==================================================
 * Business main js
 * ==================================================
 */

$(document).ready(function(){ // Make DOM and other elements ready
    
/* ==================================================
 * Preloader
 * ==================================================
 */
var ssPreloader = function () {
    $("html").addClass('ss-preload');
    $(window).on('load', function () {
        // force page scroll position to top at page refresh
        // $('html, body').animate({ scrollTop: 0 }, 'normal');
        // will first fade out the loading animation 
        $("#loader").fadeOut("slow", function () {
            // will fade out the whole DIV that covers the website.
            $("#preloader").delay(300).fadeOut("slow");
        });
        // for hero content animations 
        $("html").removeClass('ss-preload');
        $("html").addClass('ss-loaded');
    });
};
ssPreloader();
    
 /* ==================================================
  * Smooth Scroll
  * ==================================================
  */
 // Add smooth scrolling to all links
 $("a").on('click', function (event) {
     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
         // Prevent default anchor click behavior
         event.preventDefault();
         // Store hash
         var hash = this.hash;
         // Using jQuery's animate() method to add smooth page scroll
         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
         $('html, body').animate({
             scrollTop: $(hash).offset().top
         }, 800, function () {
             // Add hash (#) to URL when done scrolling (default click behavior)
             window.location.hash = hash;
         });
     } // End if
 });
    
/* ==================================================
 * Wow Animation
 * ==================================================
 */
wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();
    
/* ==================================================
 * Show and Hide
 * ==================================================
 */   
    
   $("#hide").click(function(){
        $(".form-container").hide();
    });
    $("#show").click(function(){
        $(".form-container").show();
    }); 
        
});  //ready function bracket 











