const input=document.getElementById("input-name")
const button=document.getElementById("btn")
const city=document.getElementById("city")
let Temp=document.getElementById("temp")
let time=document.getElementById("time")
async function getdata(cityName){
    const data= await fetch(`http://api.weatherapi.com/v1/current.json?key=2125c6ee2ebe44fa84982132241404&q=${cityName}&aqi=yes`);
     return await data.json();
     console.log(data.name);

}
button.addEventListener("click", async() => {
     const value= input.value;
     const result=await getdata(value)
     city.innerHTML=`${result.location.name}- ${result.location.region} : ${result.location.country}`
     Temp.innerHTML=result.current.temp_c+"°C";
     time.innerHTML=result.location.localtime
});