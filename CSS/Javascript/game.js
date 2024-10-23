const buttons=document.querySelectorAll(".buttons")
const body=document.querySelector("body")
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // console.log(e)
        // console.log(e.target)
        if(e.target.id=="Grey"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=="Yellow"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=="Green"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=="Red"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id=="Blue"){
            body.style.backgroundColor=e.target.id
        }
    })
})
