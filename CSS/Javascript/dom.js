let d=document.querySelector(".dad");
// d.style.backgroundColor="red";
// d.style.borderRadius="5px";
d.addEventListener("click", ()=>{
    d.style.color="white";
    d.innerHTML="<h1>Sumayya baby</h1>";
    d.style.borderRadius="5px";
})
d.addEventListener("mouseover",()=>{
    d.style.cursor="pointer";
    d.style.borderRadius="5px";
    d.style.backgroundColor="red";
})
d.addEventListener("mouseleave", ()=>{
    d.style.backgroundColor="green"
})