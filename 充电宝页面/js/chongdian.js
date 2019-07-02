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

		function fn(){
		var date=new Date();
		console.log(date);
		var tarDate=new Date("2019-02-26 00:00:00");
		var juli=tarDate-date;
		console.log(juli);
		var hs=parseInt(juli%1000);
		var ss=parseInt(juli/1000);
        var s=ss%60;
		var m=parseInt(ss/60%60);
        var h=parseInt(ss/60/60%24);
		var d=parseInt(ss/60/60/24);
        document.getElementById("daojishi").innerHTML="距离结束还剩"+d+"天"+h+"时"+m+"分"+s+"秒";
		}
		var timer=setInterval(fn,1);