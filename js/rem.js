
function fontsize(designWidth){
    function getfontsize(){
        var initalFontsize=100;
        var relwidth=document.documentElement.clientWidth;
        console.log(relwidth)
        relFontsize=relwidth*initalFontsize/designWidth;
        document.getElementsByTagName("html")[0].style.fontSize=relFontsize+"px";
    }
    getfontsize();
    window.onresize=getfontsize;
}

fontsize(1100);