(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
        $('.fixed-action-btn').openFAB();
        $('.fixed-action-btn').closeFAB();
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

$('.fb-comments').attr("data-href", window.location.href);



function cut(href) {
    // get your keys from here https://developers.google.com/url-shortener/v1/getting_started#APIKey
    gapi.client.setApiKey('AIzaSyCjUI_80DvRumdnarsZb3pgpOQyLvFKEco');
    gapi.client.load('urlshortener', 'v1', function () {
        //document.getElementById("result").innerHTML = "";

        var Url = window.location.href;
        var request = gapi.client.urlshortener.url.insert({
            'resource': {
                'longUrl': Url
            }
        });
        request.execute(function (response) {

            if (response.id != null) {
                $().attr("href", response.id);
            } else {
                alert("Error: creating short url \n" + response.error);
            }
        });
    });
}
