var hour=document.getElementById("resulth");
var minit=document.getElementById("resultm");
var sec=document.getElementById("results");
var am=document.getElementById("resultham");

function showClock(){
     let h=new Date().getHours();
     let m=new Date().getMinutes();
     let s=new Date().getSeconds();
     let post="PM";
     if(h>12){
        h=h-12
        post="PM"
     }
     m=m<10?"0"+m:m;
     s=s<10?"0"+s:s;
    hour.innerText=h;
    minit.innerText=m;
    sec.innerText=s;
    am,innerText="post";
    setTimeout(() => {
        showClock();
    }, 1000);
}


showClock();





    