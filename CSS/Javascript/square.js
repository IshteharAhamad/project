let s1=document.getElementById("square1");
let s2=document.getElementById("square2");
let s3=document.getElementById("square3");
let s4=document.getElementById("square4");
s1.addEventListener("mouseenter",()=>{
    let number=Math.floor(Math.random()*100)
    s1.innerHTML=`<h1>${number}</h1>`
})
s1.addEventListener("mouseleave",()=>{
    s1.innerHTML="<h1>1</h1>"
})
let color="green"
s2.addEventListener("mouseenter",()=>{
    if (color=="green") {
        s2.style.backgroundColor=`${color}`
         color="red"
    } 
    else if(color=="red"){
        s2.style.backgroundColor=`${color}`
        color="blue"  
        
    }
    else{
        s2.style.backgroundColor=`${color}`
        color="green" 
    }
    
})
s2.addEventListener("mouseleave",()=>{
    s2.style.backgroundColor="white"
})
s3.addEventListener("mouseenter",()=>{
    let a=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let c=Math.floor(Math.random()*256)
    s3.style.backgroundColor=`rgb(${a},${b},${c})`
})
s3.addEventListener("mouseleave",()=>{
    s3.style.backgroundColor="white"
})
s4.addEventListener("click",()=>{
    let a=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
    let c=Math.floor(Math.random()*256)
    s4.style.cursor="pointer"
    s1.style.backgroundColor=`rgb(${a},${b},${c})`
    s2.style.backgroundColor=`rgb(${b},${c},${a})`
    s3.style.backgroundColor=`rgb(${c},${a},${b})`
})
s4.addEventListener("mouseleave",()=>{
    s3.style.backgroundColor="white"
    s1.style.backgroundColor="white"
    s2.style.backgroundColor="white"
})