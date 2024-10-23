
import './App.css'

let computeNum= Math.ceil(Math.random()*10);
let count=0;
function App() {
  const UserGuess=()=>{
    if(count>=3){
      alert("Sorry your changes Over!")
      username.value='';
      return;
    }
    let username=document.getElementById('name')
    let guessNum=username.value
    if(guessNum===computeNum){
      alert("correct Guess! You Won ")
    }  
    else{
      alert("Sorry! Your guess is Wrong, Try again ")
      username.value=''
      count++;


      
    }  
  }

  return (
    <>
    <div>
      <h1> User Guessing Game! </h1>
      <div>
      <input type="number"  id='name'/>
      </div>
      <div>
        <button onClick={UserGuess}>Verify</button>
      </div>
    </div>
    
    </>
  )
}

export default App
{/* <h1>Event Handlig!!!!!!!!!!!!</h1>
<div className='user'>
<input type="text" className='name' id='name' />
<button onClick={WelcomeUser}>Welcome</button></div> */}