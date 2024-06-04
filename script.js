$(document).ready(function() {
    $('.slider1 ').owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
    })
    $('.slider2 ').owlCarousel({
        loop: true,
        margin: 30,
        items: 4,
        nav: true,
        dots: false,

    })

    $('#responsiveTabsDemo').responsiveTabs({
        startCollapsed: 'accordion'
    });
    window.onscroll = function() { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

});