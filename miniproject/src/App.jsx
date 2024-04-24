import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    console.log("effect")
  },[])
  const handleDecrement = () => {
    if (count > 0) {
      setCount( count - 1);
    }
  };
  return (
    <>
    <div className="bg-gray-200 rounded p-4 w-500 h-64 space-x-3 items-center">
      <h1 className='p-4'>Total Count :{count}</h1>
      <button onClick={()=>setCount(count+1)} className='bg-green-400 p-2 px-4 py-2 rounded-full'>Increament</button>
      <button onClick={handleDecrement} className='bg-red-400 p-2 px-4 py-2 rounded-full'>Decreament</button>
    </div>
    </>
  )
}

export default App
