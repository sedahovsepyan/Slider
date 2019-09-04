(function($) {

    $.fn.slider = function( settings ) {
        var set = $.extend({
            anim : 300,
            pause : 3000,
            autoplay: null,
            ulClass:'slides-wrapper',
            nextClass:'sl-next',
            prevClass:'sl-prev',


        }, settings);

        var $slider = $(this),

            $next = $slider.find('.'+set.nextClass+''),
            $prev = $slider.find('.'+set.prevClass+''),
            $wrapper = $slider.find('.'+set.ulClass+''),
            $item = $wrapper.find('>li'),




            n = $item.length,
            w;


        $slider.css('overflow','hidden');
        $wrapper.find('>li:last-child').prependTo($wrapper);
        $wrapper.css({
            'height':'100%',
            'position':'relative'
        });
        $item.css({
            'height':'100%',
            'float':'left'
        });



        function sliderSize() {
            w = $slider.width();
            $item.width(w);
            $wrapper.width(n*w);
            $wrapper.css('left', -w);
        }
        sliderSize();
        $(window).resize(sliderSize);


        function next() {
            $wrapper.animate({
                'margin-left':'-='+w
            }, set.anim, function() {
                var $this = $(this);
                $this.find('>li:first-child').appendTo($this);
                $this.css('margin-left',0);
            });

        }

        function prev() {
            $wrapper.animate({
                'margin-left':'+='+w
            }, set.anim, function() {
                var $this = $(this);
                $this.find('>li:last-child').prependTo($this);
                $this.css('margin-left',0);

            });

        }

        if (set.autoplay === 'on') {
            setInterval(function () {
                next();
            }, set.pause);
        }

        
        $next.on('click', next);
        $prev.on('click',prev);


        return $slider;
    };
}(jQuery));


$(document).ready(function() {
    $('.slider').slider({
        autoplay:'on',
        pause:3000,
    });

    $('.slider-3').slider({
        ulClass:'ul-slides',
        autoplay:'on',
        anim:2000,
        pause:5000,

    });
});