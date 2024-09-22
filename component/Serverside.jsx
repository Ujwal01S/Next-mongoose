'use client'
import React, { useEffect, useState } from 'react'

const Serverside = ({product}) => {

  const[data, setData] = useState([]);
  useEffect(() => {

    if(product){
      setData(product?.products);
    }
  },[product]);
  return (
    <div>
        <h1>asdkfjlsad</h1>

        {data?.map((p) => (
            <p>{p.id}</p>
        ))}
    </div>
  )
}

export default Serverside;