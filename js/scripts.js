$(function(){

    var $this, overlay;

    $("#menu").click(function(){
        setTimeout(function(){
            overlay = "<div class='overlay'></div>";
            $("body").append(overlay);

            $(".header-social").show().addClass("animated bounceInLeft");
            $(".overlay").addClass("animated fadeIn");
            $(".header-social").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

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
                $(".overlay").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $(".overlay").remove();
                });
                $this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                    $this.removeClass("animated bounceOutLeft").hide();
                });
            }
        }
    });

});
