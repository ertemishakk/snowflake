setInterval(clock, 1000);
setInterval(createFlake, 100);

function clock(){
    var time= new Date();
    var hours=time.getHours();
    var minutes=time.getMinutes();
    var seconds= time.getSeconds();

   var h= document.getElementById('hours');
   var m= document.getElementById('minutes');
   var s= document.getElementById('seconds');
   hours=checkZero(hours);
   minutes=checkZero(minutes);
   seconds=checkZero(seconds);
   h.innerHTML=hours;
   m.innerHTML=minutes;
   s.innerHTML=seconds;
}
    function checkZero(i){
        if(i<10){
            i="0"+i;
        }return i;
    }

    function createFlake(){
        var el= document.createElement('i');
        el.classList.add("far");
        el.classList.add("fa-snowflake")
        el.style.left=Math.random()* window.innerWidth+'px';
        el.style.animationDuration= Math.random()*3+ 3 +'s';
        el.style.opacity=Math.random();
        

        document.body.appendChild(el)

    }