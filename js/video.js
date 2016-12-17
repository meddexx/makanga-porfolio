$(document).ready(function () {
  
    if (window.innerWidth == screen.width) {
        
        $("nav ul").css("display", "none");
        $(window).scroll(function () {
            $(".navbar-brand img").css("margin-top", "0")
            $("nav ul").css("display", "block");
            var scrollTop = $(this).scrollTop();

            if (scrollTop > 150) {
                $(".navbar-brand img").css("width", "50px");
            } else {
                $(".navbar-brand img").css("width", "100px")
            }


        })
        $("").click(function(){
            
        })


        $('.video').get(0).pause();
        $(".play").click(function () {
            $(".trooibos, .trooibos2").show();
            $('.video').get(0).play();
            $("nav").delay(1000).hide();
            $(".debut-interaction").delay(1000).hide();

            $('video').on('timeupdate', function () {
                if ($('.video').get(0).currentTime >= 2.6) {

                    $('.video').get(0).pause();
                    $(".interaction").fadeIn("");
                    $(".interaction").delay(1500).addClass("agrandir");
                    $(".the-noir").hide();
                    $(".the-vert").css("margin-top","-10%");
                   
                    $('.video').off('timeupdate');

                }

            });
        });
// début  boutons suivants
        $(".trooibos, .trooibos2").hide();
        $(".tvert, .tnoir").hide();
        
        
        $(".tnoir").click(function () {
            
            $('.video').get(0).currentTime = 4.25;
            $('.video').get(0).play();
            $('video').on('timeupdate', function () {
                if ($('.video').get(0).currentTime >= 4.65) {

                    $('.video').get(0).pause();
                    $(".interaction").fadeIn("");
                    $(".interaction").delay(1500).addClass("agrandir");
                    $(".the-vert").css("margin-top","-10%");
                    $(".tnoir").hide();
                    $(".tvert").show();
                    $('.video').off('timeupdate');

                }

            });
        });
        $(".trooibos").click(function () {
            $('.video').get(0).currentTime = 3.1;
            $('.video').get(0).play();
            $('video').on('timeupdate', function () {
                if ($('.video').get(0).currentTime >= 3.7) {

                    $('.video').get(0).pause();
                    $(".interaction").fadeIn("");
                    $(".interaction").delay(1500).addClass("agrandir");
                    $(".the-vert").css("margin-top","-10%");
                    $(".trooibos").hide();
                    $(".tnoir").show();
                    $('.video').off('timeupdate');

                }

            });
        });
        $(".tvert").click(function () {
            $('.video').get(0).currentTime = 2;
            $('.video').get(0).play();
            $('video').on('timeupdate', function () {
                if ($('.video').get(0).currentTime >= 2.7) {

                    $('.video').get(0).pause();
                    $(".interaction").fadeIn("");
                    $(".interaction").delay(1500).addClass("agrandir");
                    $(".the-vert").css("margin-top","-10%");
                    $(".tvert").hide();
                    $(".trooibos").show();
                    $('.video').off('timeupdate');

                }

            });
        });
// fin  boutons suivants 
        
// début  boutons précédents...      
        $(".tvert2, .tnoir2").hide();
        $(".tnoir2").click(function () {
            
            $('.video').get(0).currentTime = 4.25;
            $('.video').get(0).play();
            $('video').on('timeupdate', function () {
                if ($('.video').get(0).currentTime >= 4.65) {

                    $('.video').get(0).pause();
                    $(".interaction").fadeIn("");
                    $(".interaction").delay(1500).addClass("agrandir");
                    $(".the-vert").css("margin-top","-10%");
                    $(".tnoir2").hide();
                    $(".trooibos2").show();
                    $('.video').off('timeupdate');

                }

            });
        });
        $(".trooibos2").click(function () {
            $('.video').get(0).currentTime = 3.1;
            $('.video').get(0).play();
            $('video').on('timeupdate', function () {
                if ($('.video').get(0).currentTime >= 3.7) {

                    $('.video').get(0).pause();
                    $(".interaction").fadeIn("");
                    $(".interaction").delay(1500).addClass("agrandir");
                    $(".the-vert").css("margin-top","-10%");
                    $(".trooibos2").hide();
                    $(".tvert2").show();
                    $('.video').off('timeupdate');

                }

            });
        });
        $(".tvert2").click(function () {
            $('.video').get(0).currentTime = 2;
            $('.video').get(0).play();
            $('video').on('timeupdate', function () {
                if ($('.video').get(0).currentTime >= 2.6) {

                    $('.video').get(0).pause();
                    $(".interaction").fadeIn("");
                    $(".interaction").delay(1500).addClass("agrandir");
                    $(".the-vert").css("margin-top","-10%");
                    $(".tvert2").hide();
                    $(".tnoir2").show();
                    $('.video').off('timeupdate');

                }

            });
        });
// fin  boutons précédents 
        
        
        
        
        
        
        
        
        
      
    } else {
        $("#video-background").attr("src", "media/tea.mp4");
//        $(window).resize(function () {
//            if (window.innerWidth == screen.width) {
//                $("#video-background").attr("src", "media/test.mp4");
//                $('.video').get(0).pause();
//            } else {
//                $("#video-background").attr("src", "media/tea.mp4");
//            }
//        })
    }



});