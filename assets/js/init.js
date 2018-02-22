(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
        $('.fixed-action-btn').openFAB();
        $('.fixed-action-btn').closeFAB();
    }); // end of document ready
})(jQuery); // end of jQuery name space

function replaceThisBtn(el){
    return $(el).replaceWith('<iframe src="'+ $(el).attr('data-href') +'"></iframe>');
}

$(document).ready(function () {
    var btnMore = $('div.url');

    $(btnMore).first().replaceWith('<iframe src="https://mozilla.github.io/pdf.js/web/viewer.html?file=https://el3zahaby.github.io/' + $(btnMore).first().html() + '"></iframe>');
    $(btnMore).replaceWith(function(){
         var txt  = $(this).html(),
             Tid  = $(this).attr('id');

        return '<a onclick="replaceThisBtn(\'#'+Tid+'\');" id="'+Tid+'" class="waves-effect waves-light btn green darken-1" data-href="https://mozilla.github.io/pdf.js/web/viewer.html?file=https://el3zahaby.github.io/' + txt + '">الجزء التالي</a>'
    });
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



function cut(text) {
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
                $(".sharebtn.whatsapp").attr("href",encodeURI("whatsapp://send?text="+text +" : \n\n "+ response.id));
                $(".sharebtn.facebook").attr("href","https://www.facebook.com/sharer/sharer.php?u="+ response.id + "&t="+ text);
                $(".sharebtn.twitter").attr("href","https://twitter.com/share?url="+ response.id+"&text="+text);
            } else {
                alert("Error: creating short url \n" + response.error);
            }
        });
    });
}
