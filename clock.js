// lets build another project of clock which will show exact time by using some great method of javascript

let recive = document.getElementById("just_doing")
recive = setInterval(time, 1000)
let hoo = document.getElementsByTagName("h1")[1]

function time() {
var sameye = new Date()

var hour = sameye.getHours()
var min = sameye.getMinutes()
var sec = sameye.getSeconds()
var session 

session = (hour>11) ? "PM" : "AM"

if(hour<10){
    hour = "0" + hour
}
if(hour>12){
    hour = (hour - 12)
}

// here i am using short trick to acustomed my work in less code 
// i will use ternary operator

hour = (hour<10) ? "0" + hour : hour;
min = (min<10) ? "0" + min : min;
sec = (sec<10) ? "0" + sec : sec;
 
var collection = hour + ":" + min + ":" + sec + " " + session;
hoo.innerText = collection;
hoo.textContent = collection;

}
