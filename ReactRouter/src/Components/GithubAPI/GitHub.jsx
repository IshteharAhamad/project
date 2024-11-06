import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function GitHub() {
    const data=useLoaderData()
    // const [data,setData]=useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/IshteharAhamad')
    //     .then((response)=>response.json())
    //     .then((data)=>setData(data))
    // },[data])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl flex justify-between rounded-lg'>
      <h1 className='font-bold my-2'>{data.name}</h1>
      <p className='font-extralight'>Github followers: {data.followers}</p>
    <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-md mb-2' />
    </div>
  )
}
//  export async function GetUser() {
//     const responce= await fetch('https://api.github.com/users/IshteharAhamad');
//     return responce.json()
//     console.log(responce)
// }



export default GitHub