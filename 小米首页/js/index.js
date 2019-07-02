    $(function(){	
        var imgs = document.getElementsByClassName('runimg');
        var index = document.getElementsByClassName('index');
        var indexs = document.getElementsByTagName('a');
        for(var i = 0 ; i < indexs.length; i ++){
            indexs[i] = i; 
        }        
        var count = 0;       
        var run = setInterval(start,2000);                 
        function start (){
            imgs[count].style.opacity= 0;
            indexs[count].style.backgroundColor = "rgba(0,0,0,0.4)";
            count ++;
            if(count == 5){
                count = 0;
            }
            imgs[count].style.opacity = 1;
            indexs[count].style.backgroundColor = "rgba(255,255,255,0.4)";
        }
		
 			$(".mix1").mouseover(function(){
				$(".con-fix").slideDown(2000);
 			});			
			$(".mix1").mouseout(function(){
				$(".con-fix").slideUp();
			});
			$("#hrefs").mouseover(function(){
				$(".phone-kind").show();
			});
			$("#hrefs").mouseout(function(){
				$(".phone-kind").hide();
			});
		});