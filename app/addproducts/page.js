'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'


const page = () => {
  const [productData, setProductData] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    
    setProductData({
        ...productData, [e.target.id]:e.target.value
    });
    // console.log(productData);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(productData),
    });
    setProductData({
      name:'',
      price:'',
      company:'',
      color:'',
      category:'',
    });
    router.push('/product');
  };

  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
        <h2 className='mb-4'>Add Product Data</h2>
        <form onSubmit={handleSubmit} className='flex flex-col w-1/2  items-center'>
            <label className='mr-[21rem] font-semibold text-lg'>Name:</label>
            <input id='name' placeholder='Enter product name' value={productData.name} onChange={handleChange}
            className='space-y-2 border-2 w-[24rem] py-2 my-2 rounded-md'/>

            <label className='mr-[21rem] font-semibold text-lg'>Price:</label>
            <input id='price' placeholder='Enter product price' value={productData.price} onChange={handleChange}
            className='space-y-2 border-2 w-[24rem] py-2 my-2 rounded-md' />

            <label className='mr-[15rem] font-semibold text-lg'>Company Name:</label>
            <input id='company' placeholder='Enter product company' value={productData.company} onChange={handleChange}
            className='space-y-2 border-2 w-[24rem] py-2 my-2 rounded-md'/>

            <label className='mr-[21rem] font-semibold text-lg'>Color:</label>
            <input id='color' placeholder='Enter product color' value={productData.color} onChange={handleChange}
            className='space-y-2 border-2 w-[24rem] py-2 my-2 rounded-md'/>

            <label className='mr-[19rem] font-semibold text-lg'>Category:</label>
            <input id='category' placeholder='Enter product category' value={productData.category} onChange={handleChange}
            className='space-y-2 border-2 w-[24rem] py-2 my-2 mb-2 rounded-md'/>

            <button className='bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-600 text-white
            w-40 p-[1.5px] pb-[[1.5px]] rounded-md  h-8 mb-2'>
              <div className='hover:bg-white hover:text-black rounded-md  h-8'>

              Add Product
              </div>
            </button>
        
        </form>

 
    </div>
  )
}

export default page;