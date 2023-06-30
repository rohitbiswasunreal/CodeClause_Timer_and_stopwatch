var birthday=new Date("july 27,2023 11:00:00").getTime()
var juggad=setInterval(() => {
var now=new Date().getTime();
let final=birthday-now;



    


 var day=Math.floor(final/(1000*60*60*24))
 console.log(day)
 var hours=Math.floor((final%(1000*60*60*24))/(1000*60*60))
 var minutes=Math.floor((final%(1000*60*60))/(1000*60))
 var sec=Math.floor((final%(1000*60))/(1000))

document.getElementById("timer").innerHTML=day+"d: "+hours+"hrs: "+minutes+"m: "+sec+"s"
}, 1000);