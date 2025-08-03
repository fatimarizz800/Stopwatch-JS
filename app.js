var milisec = document.getElementById("milisecond")
var sec = document.getElementById("second")
var min = document.getElementById("minutes")
var Startbtn = document.getElementById("Start")
var Stopbtn = document.getElementById("Stop")
var Resetbtn = document.getElementById("Reset")
var interval;

var milisecond = 0
var second = 0
var minutes = 0

function timer() {
    milisecond++
    milisec.innerHTML=milisecond
    if (milisecond == 99) {
        second++
        sec.innerHTML=second
        milisecond = 0

    }
    if (second == 59) {
        minutes++
        min.innerHTML=minutes
        second = 0
        milisecond = 0
    }


}
 function start(){
    interval = setInterval(timer,10)
    Startbtn.disabled=true
 }
 function pause(){
    clearInterval(interval)
    Startbtn.disabled=false
    Stopbtn.disabled=true
 }
function reset() {
  pause()  
milisecond =0
second = 0
minutes = 0
milisec.innerHTML=milisecond
sec.innerHTML=second
min.innerHTML=minutes
Resetbtn.disabled=true
}