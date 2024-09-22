
import Serverside from '@/component/Serverside'
import React from 'react'

const page = async() => {

  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    
    <div>
        <Serverside product = {data}/>
    </div>
  )
}

export default page