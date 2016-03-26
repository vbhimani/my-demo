// sliding animation in bootstrap dropdown
$('.dropdown').on('show.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(500);
});
$('.dropdown').on('hide.bs.dropdown', function(e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(500);
});
// -----------------------------------------------------------------------------------------------------------
// this js for dropdown step
$(function() {
    $(".dropdown-menu > li > a.trigger").on("click", function(e) {
        var current = $(this).next();
        var grandparent = $(this).parent().parent();
        if ($(this).hasClass('left-caret') || $(this).hasClass('right-caret'))
            $(this).toggleClass('right-caret left-caret');
        grandparent.find('.left-caret').not(this).toggleClass('right-caret left-caret');
        grandparent.find(".sub-menu:visible").not(current).hide();
        current.toggle(500);
        e.stopPropagation();
    });
    $(".dropdown-menu > li > a:not(.trigger)").on("click", function() {
        var root = $(this).closest('.dropdown');
        root.find('.left-caret').toggleClass('right-caret left-caret');
        root.find('.sub-menu:visible').hide();
    });
});
// -----------------------------------------------------------------------------------------------------------
// Carousel settings
$(document).ready(function() {
    // owl carousel - 1
    var owl = $("#owl-demo");

    owl.owlCarousel({

        navigation: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true
    });
    $(".next").click(function() {
        owl.trigger('owl.next');
    })
    $(".prev").click(function() {
        owl.trigger('owl.prev');
    })

    // owl carousel - 2
    var owl2 = $("#owl-demo-2");
    owl2.owlCarousel({
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1000, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: [400, 1] // itemsMobile disabled - inherit from itemsTablet option
    });

    $(".next2").click(function() {
        owl2.trigger('owl.next');
    })
    $(".prev2").click(function() {
        owl2.trigger('owl.prev');
    })

    var mywidth = $("#n2").width();

    if (mywidth >= 1024) {
        // hide the buttons
        $(".hov-vis").hide();
        // $("#owl-demo-2 .owl-pagination").hide();

        $("#owl-demo-2").mouseover(function() {
            $(".hov-vis").fadeIn(500);
            // $("#owl-demo-2 .owl-pagination").fadeIn(500);
        })
        $("#n2").mouseleave(function() {
            $(".hov-vis").fadeOut(500);
            // $("#owl-demo-2 .owl-pagination").fadeOut(500);  
        })
    } else {
        $(".hov-vis").hide();
    }
});
