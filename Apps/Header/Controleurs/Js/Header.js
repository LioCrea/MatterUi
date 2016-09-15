
Header = function(){};
Header.prototype = {
    eventListeners: function () {
        var This = this;

        $('.menu-options').click( function () {
            $('.menu-options').each( function () {
                $(this).removeClass('selected-menu');
            });
            $(this).addClass('selected-menu');
            var target= $(this).attr('data-url');
            This.menuHandler(target);
        })
    },

    menuHandler: function (target) {
        $.ajax({
            type: "POST",
            url: '../S/' + target,
            success: function (data) {
                $('.main-wrapper').fadeOut(200).html(data).hide().fadeIn();
            }
        });

    },

    init: function () {
        this.eventListeners();
    }
};