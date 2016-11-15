
Inputs = function(){};
Inputs.prototype = {
    eventListeners: function () {
        var This = this;

        // on load... wait
        setTimeout( function () {
            This.calculatedWidth();
        },800);

        // check all input-wrapper
        $('.input-mega-wrapper').each( function () {
           var that= $(this);
            var wrapper= that.find($('.input-wrapper'));
            var dftWrapper= that.find($('.input-dft-wrapper'));
            var fo= that.find($('.input-std > i'));
            var input= that.find($('.input-dft-search input'));
            var btn= that.find($('.input-dft-btn button'));
            var classesName= wrapper.attr('class');
            var className= classesName.substr(classesName.indexOf("wrapper-") + 8);
            // catch color only
            var colorName= className.substr(0, className.indexOf("-style"));
            //set custom colors classes
            This.inputDesignSetup(wrapper, dftWrapper, fo, input, btn, colorName);
        });

        $(window).on('resize', function () {
            This.calculatedWidth();
        });

        $('input').on('keyup', function () {
            var length= $(this).val();
            var classesName= $(this).closest('.input-wrapper').attr('class');
            var className= classesName.substr(classesName.indexOf("wrapper-") + 8);
            var colorName= className.substr(0, className.indexOf("-style"));
            var stdBtn= $(this).closest('.input-mega-wrapper').find($('button'));
            This.toggleDisable(length, stdBtn, colorName);
        });

        $('.input-stretched > input').on('focus', function () {
            var beStretched= $(this).closest('.input-stretcher');
            This.stretcher(beStretched, true);
        }).blur( function () {
            var beStretched= $(this).closest('.input-stretcher');
            This.stretcher(beStretched, false);
        })
    },

    // functions to design inputs on load
    inputDesignSetup: function (wrapper, dftWrapper, fo, input, btn, colorName) {
        var This= this;
        wrapper.addClass(colorName + '-b-input-wrapper');
        dftWrapper.addClass('white-bg');
        fo.addClass(colorName + '-cl');
        input.addClass(colorName + '-cl');
        btn.addClass(colorName + '-bg white-cl');
        This.inputDesignOnHover(wrapper, colorName);
    },

    inputDesignOnHover: function (wrapper, colorName) {
        wrapper.hover( function () {
            $(this).addClass('input-' + colorName + '-hover');
        }, function () {
            $(this).removeClass('input-' + colorName + '-hover');
        });
    },

    // function to toggle disable state
    toggleDisable: function (length, stdBtn, colorName) {
        //check btn dft class
        if(length.length >1) {
            stdBtn.removeClass('disable');
            stdBtn.addClass(colorName + '-btn-active');
        } else {
            stdBtn.addClass('disable');
            stdBtn.removeClass(colorName + '-btn-active');
        }
    },

    // responsive resize
    calculatedWidth: function () {
        var initWidth= 10+parseInt($('.input-dft-wrapper').css('padding-left'))+parseInt($('.input-dft-icon').css('width'))+parseInt($('.input-dft-search').css('width'));
        $('.search-results-wrapper').css({width: initWidth + 'px'});

        // media-query on buttons
        var dftButton= $('.input-dft-btn');
        if(parseInt($(window).width(), 10) < 660) {
            dftButton.addClass('BtnWrapperXsScreens');
            dftButton.css({width : $('.input-wrapper').width()});
        } else {
            dftButton.removeClass('BtnWrapperXsScreens');
            dftButton.css({width : '20%'});
        }
    },

    // stretched input
    stretcher: function (beStretched, bool) {
        switch (bool) {
            case true:
                beStretched.addClass('full-width');
                break;
            case false:
                beStretched.removeClass('full-width');
        }
    },

    init: function () {
        this.eventListeners();
    }
};