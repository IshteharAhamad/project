import React from 'react'

async function GetUser() {
    const responce= await fetch('https://api.github.com/users/IshteharAhamad');
    return responce.json()
    console.log(responce)
}

export default GetUser