
Popups = function(){};
Popups.prototype = {
    eventListeners: function () {
        var This = this;

        $('.confirm-this-action').click( function () {
            This.confirm({
                'type' : 'success'
            });
        });

    },

    confirm: function (options) {
        var This= this;

        This.initPopup(options);
    },

    initPopup: function (options) {
        var This= this;

        var popup=  '' +
                    '<div class="popup-confirm">' +
                        '<div class="popup-message"></div>' +
                        '<div class="type-icon"></div>' +
                        '<div class="line-wrapper">' +
                            '<div class="xs-lines"></div>' +
                        '</div>' +
                        '<div class="popup-confirm-btn"></div>' +
                    '</div>';
        $('body').append(popup);

        var btnCl= 'confirm-action';
        var confirmBtn= '<button class="popup-btn ' + btnCl + '"></button>';
        $('.popup-confirm-btn').append(confirmBtn);

        $('.line-wrapper').addClass('popups-right-align');
        $('.popup-confirm-btn').addClass('popups-right-align margin-10');
        $('.popup-btn').addClass('popups-dft-confirm-btn');
        $('.popup-confirm').addClass('popups-slide-dynamic');
        $('.popup-message').addClass('popups-dft-message');
        $('.type-icon').addClass('popups-dft-icon');

        // Case message
        if(options.message && (options.message).length != 0 ) {
            $('.popup-message').html(options.message);
        } else {
            switch(options.type) {
                case 'danger':
                    $('.popup-message').html('This is a dangerous stuff that you\'re trying to do. Are you sure?');
                    break;
                case 'warning':
                    $('.popup-message').html('Well... Looks like there are some weird stuffs. Are you sure?');
                    break;
                case 'success':
                    $('.popup-message').html('Everything worked like a charm! Great :)');
                    break;
            }
        }

        // Case type
        switch(options.type) {
            case 'danger':
                var dangerIcon= '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>';
                $('.type-icon').append(dangerIcon);
                $('.popup-btn').html('Confirm');
                $('.popup-btn').css({color: '#e74c3c'});
                $('.popup-confirm').css({
                                        background: '#e74c3c',
                                        color: '#ffffff'
                                        });
                break;
            case 'warning':
                var warningIcon = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>';
                $('.type-icon').append(warningIcon);
                $('.popup-btn').html('Got It!');
                $('.popup-btn').css({color: '#e67e22'});
                $('.popup-confirm').css({
                                        background: '#e67e22',
                                        color: '#ffffff'
                                        });
                break;
            case 'success':
                var successIcon= '<i class="fa fa-check" aria-hidden="true"></i>';
                $('.type-icon').append(successIcon);
                $('.popup-btn').html('Close');
                $('.popup-btn').css({color: '#27ae60'});
                $('.popup-confirm').css({
                                        background: '#27ae60',
                                        color: '#ffffff'
                                        });
                break;
        }

        setTimeout( function () {
                $('.popup-confirm').css({ top: 0 });
        },100);
        setTimeout( function () {
                $('.type-icon').css({ opacity: 1 });
        }, 400);

        This.callBack();
    },

    callBack: function () {
      $('.popup-btn').click( function () {
        $('.popup-confirm').css({top: '-220px'});
      });
    },

    init: function () {
        this.eventListeners();
    }
};