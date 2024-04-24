// for(let i=0;i<=10;i++){
//     console.log(i)
// }
// var name=prompt(" Enter name: ")
// document.write(name)
// function add(){
//      document.write("Good morning !!")
// }
// add()
// ---------------------------------------//
// const mult= ()=>{
//     document.write(" arrow function is there!!")
// }
// mult()
// ------------------------///
 function calculator(numbar,num){
    if(numbar>=0 && num>0){
        result= num+numbar
        return result
    }
    else{
        return num-numbar
    }
 }
 console.log(calculator(-12,122))