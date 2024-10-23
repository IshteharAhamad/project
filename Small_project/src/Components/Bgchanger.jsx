import React, { useState } from 'react'

function Bgchanger() {
    const [color,setColor]= useState("grey");

  return (
     <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          style={{backgroundClip:"red"}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600"
          onClick={()=>setColor("red")}
          >Red</button>
          <button
          style={{backgroundColor:"green"}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600"
          onClick={()=>setColor("green")}
          >Green</button>
          <button
          style={{backgroundColor:"blue"}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600"
          onClick={()=>setColor("blue")}
          >Blue</button>
          <button
          style={{backgroundColor:"yellow"}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-600"
          onClick={()=>setColor("yellow")}
          >yellow</button>
          <button
          style={{backgroundColor:"pink"}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-800"
          onClick={()=>setColor("pink")}
          >pink</button>
        </div>
      </div>
    </div>
  )
}

export default Bgchanger