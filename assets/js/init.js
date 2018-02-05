(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

        $(document).ready(function() {
            var frame = $('iframe');
            var Gogl = $('iframe[data-url="1"]');
            frame.addClass('card');
            frame.css({
                "width": "100%",
                "height": "450",
                "border": "0"
            })

            frame.not('[data-url="1"]').each(function() {
                var $this = $(this);
                var _href = $this.attr("src");
                $this.attr("src", "https://mozilla.github.io/pdf.js/web/viewer.html?file=" + _href);
            });
            Gogl.each(function() {
                var $this = $(this);
                var _href = $this.attr("src");
                $this.attr("src", "https://docs.google.com/viewer?url=" + _href + "&embedded=true");
            });
        });
