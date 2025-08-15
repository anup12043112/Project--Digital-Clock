function switchTheme(){
    let theme = document.getElementById("style");
    let btn = document.getElementById("theme");
    if (theme.getAttribute("href")=== "style1.css"){
        theme.setAttribute("href", "style2.css");
        btn.innerHTML = "☀";
        
    } else {
        theme.setAttribute("href", "style1.css");
        btn.innerHTML = "⏾";
    }
}
function getTime(){
    let date = new Date();
    let currentMin = date.getMinutes();
    let currentHour = date.getHours();
    let currentSec = date.getSeconds();
    let minutes = document.getElementById("min");
    let hour = document.getElementById("hour");
    let sec = document.getElementById("sec");
    hour.innerHTML = currentHour;
    minutes.innerHTML = currentMin;
    if (currentSec<10){
        sec.innerHTML = "0" + currentSec;
    } else{
        sec.innerHTML = currentSec;
    }
}

setInterval(getTime, 100);
