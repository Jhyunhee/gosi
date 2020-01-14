$("document").ready(function(){
        $(".popup-btn").click(function(){
            $(".popup").slideToggle();
            $(".popup-btn span").toggleClass("down");
            $(".popup-btn span img").toggleClass("rotate")
        })
        })