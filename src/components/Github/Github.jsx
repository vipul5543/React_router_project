import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/kunal-kushwaha')
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
  return (
    <div className='bg-gray-600 text-white m-4 text-center text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300} />
     </div>
  ) 
}

export default Github