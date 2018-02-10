(function ($) {
    $(function () {

        $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'right', // Choose the horizontal origin

    }
  );

    }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function () {
    var Gogl = $('div.url');
    $(Gogl).replaceWith('<iframe src="https://mozilla.github.io/pdf.js/web/viewer.html?file=https://el3zahaby.github.io/' + $('div.url').html() + '"></iframe>');

    var frame = $('iframe');
    frame.addClass('card');
    frame.css({
        "width": "100%",
        "height": "400",
        "border": "0",
//        "position": "absolute",
        "right": "0",
        "left": "0"
    });



});
$('.fb-comments').attr("data-href",window.location.href);
