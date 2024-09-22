import React from 'react'
import Link from 'next/link';
import DeleteProduct from '@/lib/DeleteProduct';

  
async function getData(){
  const res = await fetch('http://localhost:3000/api/products',{cache:"no-cache"});
  const data = await res.json();
  
  if(data.success){
    return data.data;
  }else{
    return {success:false};
  }
 
}

const page = async() => {
    const product = await getData();
    // console.log(product);

  return (
    <div className=''>
      <div className='flex space-x-4'>
        {product?.map((d) =>(
          <div key={d._id} className=''>
          <p>{d._id}</p>
          <p>{d.name}</p>
          <p>{d.price}</p>
          <p>{d.company}</p>
          <p>{d.color}</p>
          <p>{d.category}</p>
          <Link href={`/product/${d._id}`}>
               Edit
          </Link>
          <DeleteProduct id = {d._id}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page