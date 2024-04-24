const clock=document.getElementById("clock_id");
const stop=document.getElementById("stop-id");
function showtime(){
    const currentTime= new Date();
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    clock.innerText=time;
}
let interval = setInterval(showtime,1000);
stop.addEventListener('click',()=>{
    clearTimeout(interval);
})