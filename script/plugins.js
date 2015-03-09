/**
 * Created by felixkoller on 08.03.15.
 */
/* activate scrollspy menu */
$('body').scrollspy({
    target: '#navbar-collapsible',
    offset: 50
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 50
            }, 1000);
            return false;
        }
    }
});


/* Animation von Rechts für Timeline-Inverted */
jQuery(document).ready(function() {
    jQuery('.timeline-inverted').addClass("hidden-new").viewportChecker({
        classToAdd: 'visible-new animated bounceInRight',
        offset: 100
    });
});

/* Animation von Links für Timeline-Left */
jQuery(document).ready(function() {
    jQuery('.timeline-left').addClass("hidden-new").viewportChecker({
        classToAdd: 'visible-new animated bounceInLeft',
        offset: 100
    });
});

/* Animation Progress-Bar */
jQuery(document).ready(function() {
    jQuery('.progress-bar').addClass("hidden-new").viewportChecker({
        classToAdd: 'visible-new animated slideInLeft',
        offset: 100
    });
});

/*


var bar = $('.progress-bar');
var progress = $('.skills');
$(function(){
    if(progress.viewportChecker()) {
        console.log('Testeintrag');
    $(bar).each(function(){
        bar_width = $(this).attr('aria-valuenow');
        $(this).width(bar_width + '%');
        console.log('zweiter eintrag');
    });
    };
});

*/