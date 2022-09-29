
function showTime(){
    const d =new Date()
const hour=d.getHours(),
    minut=d.getMinutes(),
    second=d.getSeconds()
    document.querySelector('.hour').innerText=hour +":"
    document.querySelector('.minut').innerText=minut+":"
    document.querySelector('.second').innerText=second
}
setInterval(showTime,10)