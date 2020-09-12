 const hour = document.querySelector('.hour');
 const min = document.querySelector('.min');
 const sec = document.querySelector('.sec')
 const body = document.querySelector('body');
 const colorCode = document.querySelector(".colorCode")
 var firstHex = "";
 var secondHEx = "";
 var thirdHex = "";


 function clock() {
     const time = new Date();

     const seconds = time.getSeconds();
     const minutes = time.getMinutes();
     const hours = (time.getHours() % 12);

     if (hours < 10) {
         firstHex = hour.innerHTML = "0" + hours;
     } else {
         firstHex = hour.innerHTML = hours;
     }

     if (minutes < 10) {
         secondHEx = min.innerHTML = "0" + minutes;
     } else {
         secondHEx = min.innerHTML = minutes;
     }

     if (seconds < 10) {
         thirdHex = sec.innerHTML = "0" + seconds;
     } else {
         thirdHex = sec.innerHTML = seconds;
     }

     var color = "" + firstHex + secondHEx + thirdHex;



     body.style.backgroundColor = "#" + color;
     colorCode.innerHTML = "#" + color;

 }

 setInterval(clock, 1000);