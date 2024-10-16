
// for hours formula 
//12h = 360 deg
// 1h = 30 deg
// 1hn = 30n deg
// 60m = 30 deg
// 1m = 1/2 deg
//1nm = n/2 deg
  
// (hours = 30 n deg + n/2 deg)


// for minute formaula
// 60min = 360 deg
//1m  = 6 deg


// 1mn  = 6n deg

// for second formula

// 60 sec = 360 deg 
// 1 sec  = 6 deg

// 1sn  = 6n deg



let hourhand = document.querySelector(".hour-hand");
let minhand = document.querySelector(".min-hand");
let sechand = document.querySelector(".sec-hand");
let dh = document.querySelector(".dh");
let dm = document.querySelector(".dm");
let ds = document.querySelector(".ds");

setInterval(()=>
{
   let date = new Date();
   let hours = date.getHours();
   let minute = date.getMinutes();
   let second = date.getSeconds();
   
   hours = (hours>12? hours -=12:hours);
   hours = ( hours<10? '0'+  hours :  hours);
   minute = (minute<10? '0'+ minute : minute);
   second = (second<10? '0'+ second : second);
   let hrrotation = 30*hours+hours/2;
   let minrotation = 6*minute;
   let secrotation = 6*second;

   dh.innerHTML=  hours;
   dm.innerHTML=   minute;
   ds.innerHTML=  second;

   hourhand.style.transform = `rotate(${hrrotation}deg)`;
   minhand .style.transform = `rotate(${minrotation}deg)`;
   sechand.style.transform = `rotate(${secrotation}deg)`;
});