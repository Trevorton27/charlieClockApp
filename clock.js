

var current = document.getElementById("current");
const today = new Date();
var date = today.getDay()+'-'+(today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
current.innerHTML = date;

var now = document.getElementById("now");
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
now.innerHTML = time;


setInterval(date, 5000);




