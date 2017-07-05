/* 
* @Author: SIRMly
* @Date:   2017-07-05 10:51:00
*/
;(function ($){
    var imgs = [
        "images/01.jpg",
        "images/1.gif",
        "images/2.gif",
        "images/3.gif",
        "images/4.gif",
        "images/5.gif",
        "images/6.gif",
        "images/7.gif",
        "images/8.gif",
        "images/9.gif",
        "images/10.gif",
        "images/11.gif",
        "images/13.gif",
        "images/14.jpg",
        "images/jian.png"
    ];
    var proBox = $("#loading");
    preload(imgs,proBox);
    function preload(imgs,proBox){
        var proNum          = 0,
            count           = imgs.length,
            proPercentage   = 0;
        for(var i in imgs){
            var newImg = new Image();
            newImg.src = imgs[i];
            newImg.onload = function (){
                proNum++;
                console.log(Math.floor(proNum/count*100));
                proPercentage = Math.floor(proNum/count*100);
                proBox.find("#progress").html(proPercentage+"%");
                if(proNum>=count){
                    proPercentage=100;
                    proBox.addClass("hide");
                    page1();

                }
                $("#progressNum").html(proPercentage+"%");
            }
        }
    }

    function page1(){
        $(".page1").removeClass("hide");
        timeStart();
    }
    var wordTime,hiddenTime,arrowTime;
    var arrow = $(".hand");
    var swiper = new Swiper('.swiper-container',{
        simulateTouch: false,
        slidesPerView: 1,
        paginationClickable: false,
        spaceBetween: 0,
        loop: false,
        autoplay: false,
        autoplayDisableOnInteraction: false,
        onTransitionStart : function (swiper){
            $(".hidden").removeClass("hide");
            $(".words").removeClass("moveToLeft");
            console.log(swiper.activeIndex);
            $(".text").hide();
            arrow.addClass("hide");
            /*==清除定时器==*/
            clearTimeout(wordTime);
            clearTimeout(hiddenTime);
            clearTimeout(arrowTime);
        },
        onTransitionEnd : function (swiper){
            //console.log(swiper);
            var slideNow = $(".swiper-slide-active");
            var text1 = slideNow.find(".text1");
            var text2 = slideNow.find(".text2");
            var text3 = slideNow.find(".text3");
            /*==向右移动==*/
            var words = slideNow.find(".words");
            words.addClass("moveToLeft");
            text1.show();
            if(text2.length>0){
                wordTime = setTimeout(function (){
                    text1.stop().fadeOut(800);
                    text2.stop().delay(400).fadeIn(800, function (){
                        if(text3.length>0){
                            setTimeout(function (){
                                text2.stop().fadeOut(800);
                                text3.stop().delay(400).fadeIn(800);
                            },1500);
                        }
                    });
                }, 2000)
            }
            hiddenTime = setTimeout(function (){
                $(".hidden").addClass("hide");
            },1300);
            arrowTime = setTimeout(function (){
                arrow.removeClass("hide");
            },5000);
        }
    });

function timeStart(){
    var start = new Date();
    function move(){
        var end = new Date();
        var d = 0;
        var h = 0;
        var m = 0;
        var s = 0;
        var ms = 0;
        var t = end-start;
        h = Math.floor(t/1000/60/60%24) >= 10 ? Math.floor(t/1000/60/60%24) : "0"+Math.floor(t/1000/60/60%24);
        m = Math.floor(t/1000/60%60) >= 10 ? Math.floor(t/1000/60%60) : "0"+Math.floor(t/1000/60%60);
        s = Math.floor(t/1000%60) >= 10 ? Math.floor(t/1000%60) : "0"+Math.floor(t/1000%60);
        ms = Math.floor(t%1000/10);
        document.getElementsByClassName("time")[0].innerHTML = h+":"+m+":"+s+":"+ms;
    }
    var timer = setInterval(move, 40);
}
})(jQuery);
