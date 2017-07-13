import 'lightbox2';
import slickInit from './lib/slickInit.js';

slickInit('.js-slider');


// RESPONSIVE MENU begin
$(document).ready(function(){
    $(".nav__mobile").html($(".nav__main").html());
    $(".nav__trigger span").click(function(){
        if ($("nav.nav__mobile ul").hasClass("expanded")) {
            $("nav.nav__mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav.nav__mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });
});
// RESPONSIVE MENU end