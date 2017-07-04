/* 
* @Author: Marte
* @Date:   2017-06-26 23:55:10
* @Last Modified by:   Marte
* @Last Modified time: 2017-06-30 11:45:53
*/
/*
* * @Last Modified by:   SIRMly
 * @Last Modified time: 2017-07-04
* */

// function GetTime(){
//     var EndTime = new Date("2017/09/08 00:00:00");
//     var NewTime = new Date();
//     var t = EndTime.getTime() - NewTime.getTime();
//     var d = 0;
//     var h = 0;
//     var m = 0;
//     var s = 0;
//     if(t>=0){
//         d = Math.floor(t/1000/60/60/24);
//         // y = t.getFullYear();
//         // month = t.getDay();
//         // day = t.getDate();
//         h = Math.floor(t/1000/60/60%24) > 10 ? Math.floor(t/1000/60/60%24) : "0"+Math.floor(t/1000/60/60%24);
//         m = Math.floor(t/1000/60%60) > 10 ? Math.floor(t/1000/60%60) : "0"+Math.floor(t/1000/60%60);
//         s = Math.floor(t/1000%60) > 10 ? Math.floor(t/1000%60) : "0"+Math.floor(t/1000%60);
//         ss = Math.floor(t/1000) > 10 ? Math.floor(t/1000) : "0"+Math.floor(t/1000);
//     }

//     console.log(t/31556926);
//     document.getElementsByClassName("time")[0].innerHTML = "　"+h+":"+m+":"+s;
// }
// setInterval(GetTime,1000)
// setInterval(function(){
//     var date = new Date()
//     document.getElementsByClassName("time")[0].innerHTML = date.toLocaleTimeString();
// }, 1000);
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
    //ms = Math.floor(t/1000%60) > 10 ? Math.floor(t/1000%60) : "0"+Math.floor(t/1000%60);
    ms = Math.floor(t%1000/10);
    document.getElementsByClassName("time")[0].innerHTML = h+":"+m+":"+s+":"+ms;
}
setInterval(move, 10);