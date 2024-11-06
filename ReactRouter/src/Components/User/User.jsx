import React from 'react'
import {useParams} from'react-router-dom'
function User() {
    const {userId}=useParams()
  return (
    <div className='w-72 flex justify-items-end items-center bg-gray-600 text-white text-3xl p-4'>User : {userId}</div>
  )
}

export default User