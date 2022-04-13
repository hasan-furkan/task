const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");
const img8 = document.getElementById("img8");



btn1.onclick = function(){
    btn2.style.backgroundColor = 'white';
    btn2.style.color = "#232B76"
    btn1.style.backgroundColor= "#232B76";
    btn1.style.color= "white"
    img1.src = "images/avatar1.png"
    img2.src = "images/avatar2.png"
    img3.src = "images/avatar3.png"
    img4.src = "images/avatar4.png"
    img5.src = "images/avatar5.png"
    img6.src = "images/avatar6.png"
    img7.src = "images/avatar7.png"
    img8.src = "images/avatar8.png"
}

btn2.onclick = function(){
   
    btn1.style.backgroundColor = 'white';
    btn1.style.color = "#232B76";
    btn2.style.backgroundColor= "#232B76";
    btn2.style.color= "white"
    img1.src = "images/avatar8.png"
    img2.src = "images/avatar7.png"
    img3.src = "images/avatar6.png"
    img4.src = "images/avatar5.png"
    img5.src = "images/avatar4.png"
    img6.src = "images/avatar3.png"
    img7.src = "images/avatar2.png"
    img8.src = "images/avatar1.png"
}

const countdown = () => {
    const countDate = new Date("Jan 01, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute =  second * 60
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById("days").innerText = textDay;
    document.getElementById("hours").innerText = textHour;
    document.getElementById("minutes").innerText = textMinute;
    document.getElementById("seconds").innerText = textSecond;

}

setInterval(countdown, 1000)