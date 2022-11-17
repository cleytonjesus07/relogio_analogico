const hr = document.getElementById("hr");
const mn = document.getElementById("mn");
const sc = document.getElementById("sc");
const deg = 6;

setInterval(() => {
    let day = new Date();

    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    
    document.body.style.background = `linear-gradient(to right top,rgb(${day.getHours() * 2},${day.getMinutes() * 2},${day.getSeconds() *2}),rgb(${day.getHours() * 3},${day.getMinutes() * 3},${day.getSeconds() * 3}),rgb(${day.getHours() * 4},${day.getMinutes() * 4},${day.getSeconds() * 4}))`;
    
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
}, 1000)