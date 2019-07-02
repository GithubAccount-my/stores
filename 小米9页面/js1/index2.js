$(document).ready(function(){
     var slideBox = $(".slideBox");
     var ul = slideBox.find("ul");
     var oneWidth = slideBox.find("ul li").eq(0).width();
     var number = slideBox.find(".spanBox span");            
     var timer = null;
     var sw = 0;                    
    
     number.on("click",function (){
     $(this).addClass("active").siblings("span").removeClass("active");
     sw=$(this).index();
     ul.animate({
            "right":oneWidth*sw,    
               });
     });   
    
    timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
        },2000);
    
    slideBox.hover(function(){
        $(".next,.prev").animate({
            "opacity":1,
            },200);
        clearInterval(timer);
        },function(){
            $(".next,.prev").animate({
                "opacity":0.5,
                },500);
        timer = setInterval(function (){
        sw++;
        if(sw==number.length){sw=0};
        number.eq(sw).trigger("click");
        },2000);
            })
})