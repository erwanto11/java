/*****mybloggersworld.com***/
jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.mbw-back-to-top').fadeIn(duration);
        } else { //www.mybloggersworld.com
            jQuery('.mbw-back-to-top').fadeOut(duration);
        }
    }); 
  
    jQuery('.mbw-back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
