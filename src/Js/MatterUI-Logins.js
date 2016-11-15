
Logins = function(){};
Logins.prototype = {
    eventListeners: function () {
        var This = this;

        $('.switch').click( function () {
            This.togglePages($(this));
        });

        $('.password-recovery').click( function () {
            $('.login-dft').each( function () {
                $(this).hide();
            });
            $('.password-recovery-dft').show();
        })
    },

    togglePages: function (to) {
        var status= to.closest('.login-int');
        $('.login-int').each( function () {
            $(this).removeClass('non-active');
        });
        status.addClass('non-active');
        $('.login-dft').css({'height' : parseInt($('.login-int').css('height'))});
    },

    init: function () {
        this.eventListeners();
    }
};