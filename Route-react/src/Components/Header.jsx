import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Features/counterSlice'

function Header() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <><div className=' w-90 flex items-center align-middle justify-center'>
     
    <div className=' h-44 flex basis-4 items-center justify-center bg-slate-200 max-w-48 space-x-3 rounded-md'>
    <button className='bg-blue-500 grow-0 h-7 w-7 rounded-full text-white font-extrabold size-14 ' onClick={()=>dispatch(increment())}>+</button> 
    <span className='box-decoration-slice px-2'>{count}</span>
    <button className='bg-blue-500 grow-0 h-7 w-7 rounded-full text-white font-extrabold size-14' onClick={()=>dispatch(decrement())}>-</button>
    </div> </div>  
    </>
  )
}

export default Header