
// function set() {
//     const b = document.querySelector('.banan')
//     const arr = ['green', 'blue', 'black', 'blueviolet']
//     const randomNumber4 = arr[Math.floor(Math.random() * arr.length)]
//     b.style.background = randomNumber4
// }
// let s= setInterval(set, 100)
// function set1() {
//     const b = document.querySelector('.banan')
//     const arr = ['Abdulla', 'Qodir', 'Aziz', 'Odil']
//     const randomNumber4 = arr[Math.floor(Math.random() * arr.length)]
//     b.textContent=randomNumber4
// }
// let set=setInterval(set1, 100)
// setTimeout(()=>{
//     clearInterval(s)
// },4000)
const music = document.getElementById('audio')
function showTime() {
    const d = new Date()
    const hour = d.getHours(),
        minut = d.getMinutes(),
        second = d.getSeconds()
    const input = document.getElementById('input').value
    var input2 = document.getElementById('btn').value
    const input3 = document.getElementById('btn2').value
    if (hour == input && minut == input2 && second == input3) {
        music.play()
    }
    document.querySelector('.hour').innerText = hour + ":"
    document.querySelector('.minut').innerText = minut + ":"
    document.querySelector('.second').innerText = second
}
setInterval(showTime, 10)
function stopMusic() {
    var stop = document.getElementById('button')
    stop.addEventListener('click', () => music.pause())
}
stopMusic()
function my(){
setTimeout(afterPlay,3030)
}
setTimeout(my,9000)
function afterPlay() {
    let after = document.getElementById('button2')
     after.addEventListener('click', () => music.pause())
    // if(po){
    //     setTimeout(()=>music.play(),5000)
        
    // }
}




