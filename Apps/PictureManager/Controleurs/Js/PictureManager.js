
PictureManager = function(){};
PictureManager.prototype = {
    eventListeners: function () {
        var This= this;

        $(document).ready( function () {
            var pictureArray= ['http://picturemanager.colorsarefat.com/Pictures/1.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/2.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/3.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/4.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/5.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/6.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/7.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/8.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/9.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/10.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/11.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/12.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/13.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/14.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/15.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/16.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/17.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/18.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/19.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/20.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/21.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/22.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/23.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/24.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/25.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/26.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/27.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/28.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/29.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/30.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/31.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/32.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/33.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/34.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/35.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/36.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/37.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/38.jpg',
                'http://picturemanager.colorsarefat.com/Pictures/39.jpg'
            ];
            This.pictureManager({
                'nbPictures' : 6,
                'arrayPictures' : pictureArray,
                'saveMode' : 'on',
                'eraser' : false,
                'eraserAnimation' : 'moveOut'
            });
        });
    },

    pictureManager: function (options) {
        var This= this;

        var shadow= '<div class="shadow"> <i class="fa fa-times close-action" aria-hidden="true"></i> </div>';
        var confirmTrash= '<div class="confirm-trash-wrapper"></div>';
        $('body').append(shadow, confirmTrash);

        $(window).scroll( function () {
            This.scrollChecker();
        });

        $(window).resize( function () {
            This.resizer({
                'nbPictures' : options.nbPictures
            });
        });

        var screenSize;
        screenSize= parseInt($(window).width(),10);

        var picturesContainer;
        picturesContainer= $('.picture-container');

        var column, columnWidth;
        column=  '<div class="picture-column"></div>';
        columnWidth= screenSize/options.nbPictures;

        var pictureNb= 0;
        for(var i= 0; i < options.nbPictures; i++) {
            picturesContainer.append(column);
            $('.picture-column').css({'width' : columnWidth});
            $('.picture-column').addClass('picture-column-' + i);
        }

        do {
            $('.picture-column').each(function () {
                if(pictureNb < options.arrayPictures.length) {
                    var that= $(this);
                    var img = '<div class="img-wrapper"><img class="active-pictures picture-' + pictureNb + '" src=" ' + options.arrayPictures[pictureNb] + '" alt="ma picture"></div>';
                    that.append(img);
                    $('.active-pictures').css({'opacity' : 0});
                    pictureNb++;
                }
            })
        } while(pictureNb < options.arrayPictures.length);

        $('.active-pictures').css({'width' : (parseInt($('.picture-column').width(), 10)-60)});

        var j= 0;
        $('.active-pictures').each( function () {
            var that= $(this);
            setTimeout( function () {
                that.addClass('fullOpacity');
            },j * 20);
            j++;
        });

        setTimeout( function () {
            $('.active-pictures').each( function () {
                var that= $(this);
                if(parseInt(that.offset().top) > parseInt($(window).height())) {
                    var mask='<div class="mask"></div>';
                    that.closest('.img-wrapper').append(mask);
                }
            });
        },1000);

        if(options.saveMode == 'on') {
            This.saveMode();
        }

        if(options.eraser) {
            $('.img-wrapper').unbind();
            $('.img-wrapper').click( function () {
                var that= $(this);

                switch(options.eraserAnimation) {
                    case 'slideUp':
                        This.eraserSlideUp(that);
                        break;
                    case 'moveOut':
                        var picture= that.find('.active-pictures');
                        This.eraserMoveOut(picture);
                        break;
                }
                $('.trash-wrapper').css({'left' : '20px'});
            });

            $('.trash-wrapper').click( function () {
                This.confirmTrash();
            });
            $('.shadow').click( function () {
                This.closeShadow();
            });
        }

    },

    saveMode: function () {
        var This= this;
        This.initSaveMode();

        var likeContainer;
        likeContainer= '<div class="like-container non-liked"> ' +
            '<div class="like-btn"> ' +
            '<i class="fa fa-heart-o not-liked" aria-hidden="true"></i>' +
            '<i class="fa fa-heart liked" aria-hidden="true"></i>' +
            '</div>' +
            ' </div>';
        $('.img-wrapper').append(likeContainer);

        $('.not-liked').click( function () {
            $(this).hide();
            $(this).closest('.like-container').removeClass('non-liked');
            var likeContainer= $(this).closest('.img-wrapper');
            var likeAction= $(this).closest('.like-btn');
            var likeWrapper= $('.like-wrapper');
            likeAction.find('.liked').show();
            likeContainer.addClass('liked-border');
            likeWrapper.css({left: '15px'});
        });
        $('.liked').click( function () {
            $(this).hide();
            var likeContainer= $(this).closest('.img-wrapper');
            var likeAction= $(this).closest('.like-btn');
            likeAction.find('.not-liked').show();
            likeContainer.removeClass('liked-border');
            likeContainer.addClass('non-liked');
        });

        $('.like-wrapper').unbind();
        $('.like-wrapper').click( function () {
            var initHeight= [];

            $('html').css({'overflow-y' : 'scroll'});
            if(!$(this).hasClass('like-section')) {
                $('.menu-wrapper').css({top: '-100px', transition: '.3s'});
                $('.likes').css({top: '50%', transition: '.3s'});
                $(this).addClass('like-section');

                $('.non-liked').each( function () {
                    initHeight.push($(this).closest('.img-wrapper').find('img').css('height'));
                    $(this).closest('.img-wrapper').animate({
                        height: 0,
                        opacity: 0
                    }, '400');
                });
                This.initHeight(initHeight);
            } else {
                $(this).removeClass('like-section');
                $('.menu-wrapper').css({top: '15px', transition: '.3s'});
                $('.likes').css({top: '-100px', transition: '.3s'});
                var heightCounter= 0;
                $('.non-liked').each( function () {
                    var that= $(this);
                    that.closest('.img-wrapper').animate({
                        height: This.initHeightArr[heightCounter],
                        opacity: 1
                    }, '400');
                    heightCounter++;
                });
            }
        });

        $('.close-action').click( function () {
            var likePopup= $('.like-popup');
            likePopup.css({top: '-50%'});
            $('.header').css({top: 0});
            $('.shadow').fadeOut(200);
            $('.picture-wrapper').html('');
        })
    },

    resizer: function (options){
        var screenWidth, pictureColumn, activePictures;
        pictureColumn= $('.picture-column');
        activePictures= $('.active-pictures');

        if(!pictureColumn.hasClass('non-active-column')) {
            screenWidth = parseInt($(window).width());
            pictureColumn.css({'width': screenWidth / options.nbPictures});
            activePictures.css({'width': screenWidth / options.nbPictures});

            if (parseInt(pictureColumn.css('width')) < 200) {
                // re organize columns here
            }
        }
    },

    eraserSlideUp: function (picture) {
        var This= this;
        picture.addClass('non-active');
        picture.animate({
            height: 0,
            opacity: 0
        }, '400', function () {
            setTimeout( function () {
                picture.css({
                    'display': 'none',
                    'padding': 0
                })
            }, 100);
        });

        This.columnChecker(picture);
        setTimeout( function () {
            This.topChecker();
        },600);
    },

    eraserMoveOut: function (picture) {
        var This= this;
        picture.addClass('non-active');
        picture.animate({
            width: '40px',
            height: 'auto',
            left: '-300px',
            top: '-1000px',
            margin: 0,
            padding: 0,
            opacity: 0
        }, '1000', function () {
            setTimeout( function () {
                picture.css({'display' : 'none'});
            }, 100);
        });
        This.columnChecker(picture);
        setTimeout( function () {
            This.topChecker();
        },600);
    },

    likeCatcher: function () {
        var likeArr= [];
        $('.liked-border').each( function () {
            var that= $(this);
            likeArr.push(that.find('img').attr('src'));
        });

        return likeArr;
    },

    confirmTrash: function () {
        var trashedPictures= 0;
        var trashArray= [];

        $('.non-active').each( function () {
            var that= $(this);
            trashArray.push(that.find('img').attr('src'));

            trashedPictures++;
        });

        var columnTrash;
        columnTrash=  '<div class="picture-column-trash"></div>';
        columnTrashNb= 4;
        columnTrashWidth= parseInt($('.confirm-trash-wrapper').width(),10)/ columnTrashNb;
        for(var i= 0; i< columnTrashNb; i++) {
            $('.confirm-trash-wrapper').append(columnTrash);
        }
        $('.picture-column-trash').css({width: columnTrashWidth - 40});

        var pictureNb= 0;
        do {
            $('.picture-column-trash').each(function () {
                if(pictureNb < trashedPictures) {
                    var that= $(this);
                    var img = '<div class="img-wrapper"><img class="trashed-pictures picture-' + pictureNb + '" src=" ' + trashArray[pictureNb] + '" alt="ma picture"></div>';
                    that.append(img);
                    pictureNb++;
                    console.log(pictureNb);
                }
            })
        } while(pictureNb < trashedPictures);

        $('.trashed-pictures').css({'width' : (parseInt($('.picture-column').width()-40, 10))});

        // open trash manager
        $('.shadow').fadeIn(200);
        $('.confirm-trash-wrapper').css({top: '50%'});

        $(window).resize( function () {
            var trashWrapperWidth= parseInt($('.confirm-trash-wrapper').width());
            $('.picture-column-trash').css({width: trashWrapperWidth/columnTrashNb});
            $('.trashed-pictures').css({width: trashWrapperWidth/columnTrashNb - 40});
        })
    },

    closeShadow: function () {
        $('.confirm-trash-wrapper').css({top: '-100%'});
        $('.shadow').fadeOut(200);
        $('.non-active-pictures').hide();
    },

    columnChecker: function (picture) {
        var pictureColumn= picture.closest('.picture-column');
        var activePicturesLeft= 0;

        $.each(pictureColumn, function (i, target) {
            $('img', target).each( function () {
                if(!$(this).hasClass('non-active'))
                    activePicturesLeft++;
            })
        });

        if(activePicturesLeft == 0) {
            setTimeout( function () {
                pictureColumn.addClass('non-active-column');
                pictureColumn.css({
                    'transition' : '.3s',
                    'width' : 0
                });
            }, 1000);
        }
    },

    scrollChecker: function () {
        var This= this;
        This.headerAnim();
        This.topChecker();
    },

    topChecker: function () {
        var docScroll= parseInt($(document).scrollTop(),10);
        $('.mask').each( function () {
            var that= $(this);
            if(parseInt(that.offset().top)-docScroll < parseInt($(window).height(),10)/2) {
                that.fadeOut(500);
            }
        });
    },

    headerAnim: function () {
        var header= $('.header');
        if($(window).scrollTop() > 40) {
            header.addClass('box-shadow-scroll');
        } else {
            header.removeClass('box-shadow-scroll');
        }
    },

    initHeight: function (height) {
        var This= this;
        This.initHeightArr= height;
    },

    initSaveMode: function () {
        var likedPopup;
        likedPopup= '<div class="like-popup liked-popup-shadow"> ' +
            ' <div class="popup-header"> Your likes ' +
            ' </div>' +
            ' <div class="popup-xs-line"> </div>' +
            ' <div class="picture-wrapper"></div> ' +
            ' <div class="popup-xs-line"></div>' +
            ' <div class="popup-footer"> ' +
            ' </div>' +
            ' </div>';
        $('body').append(likedPopup);
    },

    init: function () {
        this.eventListeners();
    }
};