'use client'

import { useRouter } from "next/navigation";




export default function DeleteProduct({id}){
    const router = useRouter();

    console.log(id); 

    const handleDelete = async() => {
        const res = await fetch(`http://localhost:3000/api/products/${id}`,{
            method: 'DELETE',
        });
        const data = await res.json();
        if(data.success){
            alert('Product has been deleted');
            router.refresh()
        }
    };


    //Error
    // const handleDelete = async(id) => {
    //     const res = await fetch(`http://localhost:3000/api/products/${id}`,{
    //         method: 'DELETE',
    //     });
    //     const data = await res.json();
    //     if(data.success){
    //         alert('Product has been deleted');
    //     }
    //     router.push('/product');
    // };

    //correction

    // return(
    //     <div>
    //         <button onClick={handleDelete(id)}>Delete</button>
    //     </div>
    // )

 
    return(
        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
};