(function ($) {
    $(function () {
        $('.button-collapse').sideNav();
        $('.fixed-action-btn').openFAB();
        $('.fixed-action-btn').closeFAB();
    }); // end of document ready
})(jQuery); // end of jQuery name space

function replaceThisBtn(el){
     $('iframe').remove();
     $('.books').show()

     $(el).hide().after('<iframe src="'+ $(el).attr('data-href') +'"></iframe>');
}

$(document).ready(function () {
    var btnMore = $('div.url');

    $(btnMore).replaceWith(function(){
         var txt  = $(this).html(),
             Tid  = $(this).attr('id');

        return '<a onclick="replaceThisBtn(\'#'+Tid+'\');" id="'+Tid+'" class="btn btn-block green darken-1 mb6 books" data-href="/web/viewer.html?file=https://el3zahaby.github.io/' + txt + '">الجزء '+Tid+'</a>'
    });
    replaceThisBtn($(".books").first());

});




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
