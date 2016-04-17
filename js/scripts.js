$(function(){

    // hamburger menu
    var $this, overlay;

    $("#menu").click(function(){
        setTimeout(function(){
            overlay = "<div class='overlay'></div>";
            $("body").append(overlay);

            $(".header-social").show().addClass("animated bounceInLeft");
            $(".overlay").addClass("animated fadeIn");
            $(".header-social").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
                $this.show();
            });
        }, 200);
    });

    $(document).on("click touchstart", function(e){
        if (!$(e.target).is(".header-social, .header-social *")) {
            $this = $(".header-social");
            if ($this.hasClass("bounceInLeft")) {
                $this.removeClass("bounceInLeft").addClass("bounceOutLeft");

                $(".overlay").removeClass("fadeIn").addClass("fadeOut");
                $(".overlay").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
                    $(".overlay").remove();
                });
                $this.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
                    $this.removeClass("animated bounceOutLeft").hide();
                });
            }
        }
    });

    // search
    $("#search").click(function(){
        overlay = "<div class='overlay'></div>";
        $("body").append(overlay);
        $(".overlay").addClass("animated fadeIn");
        $(".search-wrap").css("display", "flex").fadeIn(500);
        setTimeout(function(){
            $(".search-input").addClass("is-active");
        }, 300);
    });

    $(".search-close").click(function(){
        $(".search-input").removeClass("is-active");
        setTimeout(function(){
            $(".overlay").removeClass("fadeIn").addClass("fadeOut");
            $(".overlay").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
                $(".overlay").remove();
            });
            $(".search-wrap").fadeOut(500).delay(500).hide();
        }, 300);
    });

    var hide_search = (function(){
        if ($(".overlay").hasClass("fadeIn")) {
            $(".search-input").removeClass("is-active");
            setTimeout(function(){
                $(".overlay").removeClass("fadeIn").addClass("fadeOut");
                $(".overlay").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){
                    $(".overlay").remove();
                });
                $(".search-wrap").fadeOut(500).delay(500).hide();
            }, 300);
        }
    });

    $(window).resize(function(){ hide_search(); });

});
