
Inputs = function(){};
Inputs.prototype = {
    eventListeners: function () {
        var This = this;

        // check all input-wrapper
        $('.input-mega-wrapper').each( function () {
           var that= $(this);
            var wrapper= that.find($('.input-wrapper'));
            var dftWrapper= that.find($('.input-dft-wrapper'));
            var fo= that.find($('.input-std > i'));
            var input= that.find($('.input-dft-search input'));
            var btn= that.find($('.input-dft-btn button'));

            //set custom colors classes
            if(wrapper.hasClass('wrapper-grey-style')) {
                wrapper.addClass('grey-b-input-wrapper');
                dftWrapper.addClass('white-bg');
                fo.addClass('grey-cl');
                input.addClass('grey-cl');
                btn.addClass('grey-bg white-cl');

                wrapper.hover( function () {
                    $(this).addClass('input-grey-hover');
                }, function () {
                    $(this).removeClass('input-grey-hover');
                })
            } else if(wrapper.hasClass('wrapper-sunset-style')) {
                wrapper.addClass('sunset-b-input-wrapper');
                dftWrapper.addClass('white-bg');
                fo.addClass('sunset-cl');
                input.addClass('sunset-cl');
                btn.addClass('sunset-bg white-cl');

                wrapper.hover( function () {
                    $(this).addClass('input-sunset-hover');
                }, function () {
                    $(this).removeClass('input-sunset-hover');
                })
            } else if(wrapper.hasClass('wrapper-blue-lagoon-style')) {
                wrapper.addClass('blue-lagoon-b-input-wrapper');
                dftWrapper.addClass('white-bg');
                fo.addClass('blue-lagoon-cl');
                input.addClass('blue-lagoon-cl');
                btn.addClass('blue-lagoon-bg white-cl');

                wrapper.hover( function () {
                    $(this).addClass('input-blue-lagoon-hover');
                }, function () {
                    $(this).removeClass('input-blue-lagoon-hover');
                })
            } else if(wrapper.hasClass('wrapper-bloody-style')) {
                wrapper.addClass('bloody-b-input-wrapper');
                dftWrapper.addClass('white-bg');
                fo.addClass('bloody-cl');
                input.addClass('bloody-cl');
                btn.addClass('bloody-bg white-cl');

                wrapper.hover( function () {
                    $(this).addClass('input-bloody-hover');
                }, function () {
                    $(this).removeClass('input-bloody-hover');
                })
            }
        });

        $(window).on('resize', function () {
            This.calculatedWidth();
        });
        setTimeout( function () {
            This.calculatedWidth();
        },800);
        $('input').on('keyup', function () {
            var stdBtn= $(this).closest('.input-mega-wrapper').find($('button'));
            if($(this).val().length >1) {
                stdBtn.removeClass('disable');
                //check btn dft class
                if(stdBtn.hasClass('grey-bg'))
                    stdBtn.addClass('grey-btn-active');
                else if(stdBtn.hasClass('sunset-bg'))
                    stdBtn.addClass('sunset-btn-active');
                else if(stdBtn.hasClass('blue-lagoon-bg'))
                    stdBtn.addClass('blue-lagoon-btn-active');
                else if(stdBtn.hasClass('bloody-bg'))
                    stdBtn.addClass('bloody-btn-active');
            } else {
                stdBtn.addClass('disable');
                if(stdBtn.hasClass('grey-bg'))
                    stdBtn.removeClass('grey-btn-active');
                else if(stdBtn.hasClass('sunset-bg'))
                    stdBtn.removeClass('sunset-btn-active');
                else if(stdBtn.hasClass('blue-lagoon-bg'))
                    stdBtn.removeClass('blue-lagoon-btn-active');
                else if(stdBtn.hasClass('bloody-bg'))
                    stdBtn.removeClass('bloody-btn-active');
            }
        });
    },

    calculatedWidth: function () {
        var initWidth= 10+parseInt($('.input-dft-wrapper').css('padding-left'))+parseInt($('.input-dft-icon').css('width'))+parseInt($('.input-dft-search').css('width'));
        $('.search-results-wrapper').css({width: initWidth + 'px'});
    },

    init: function () {
        this.eventListeners();
    }
};