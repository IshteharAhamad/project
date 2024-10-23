const form=document.querySelector("form")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const height=parseInt(document.getElementById("height").value)
    const weight=parseInt(document.getElementById("Weight").value)
    const result=document.querySelector(".result")

    if(height===''||height<0||isNaN(height)){
        result.innerHTML="Please give a valid height";
    }

    else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML="Please give a valid Weight";
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>BMI Result: ${bmi}</span>`
        if(bmi>18||bmi<25){
            result.innerHTML=`<span>BMI Result: ${bmi}</span> (Normal BMI range)`
        }
        if(bmi>25){
            result.innerHTML=`<span>BMI Result: ${bmi}</span> (Overweight BMI range)`
        }
        if(bmi<18){
            result.innerHTML=`<span>BMI Result: ${bmi}</span> (Underweight BMI range)`
        }
    }
})