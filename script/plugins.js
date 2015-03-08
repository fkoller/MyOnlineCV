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

/*

jQuery(document).ready(function($){
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
            console.log('Is-Hidden angewandt');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        $timeline_block.each(function(){
            if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
                console.log('reingekommen');
                $(this).find('.cd-timeline-img').removeClass('is-hidden').addClass('bounce-in');
                $(this).find('cd-timeline-content').removeClass('is-hidden').addClass('is-visible');
                console.log('etwas geändert');
            }
        });
    });
});



$(window).on('scroll', function(){
    var $timeline_block = $('.cd-timeline-block');
    $timeline_block.each(function(){
        if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-block').hasClass('is-hidden') ) {
            $(this).find('.cd-timeline-block').removeClass('is-hidden').addClass('bounce-in');
        }
    });
});

$(window).on('scroll', function() {

    if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 ){
        $('#reihe2').fadeToggle(400);
    };

});

*/