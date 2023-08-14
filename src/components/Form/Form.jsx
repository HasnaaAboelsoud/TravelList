import React, {  useState } from 'react'

export default function Form({AddItem,items}) {
    const nums= Array.from({length: 20},((num,index)=> index + 1));
    const [description,setDescription]= useState("");
    const [quantity,setQuantity]= useState(1);
    
    function handleSubmit(e){
        e.preventDefault();
        if(!description) return
        const newItem={id: Date.now(),description,quantity,packed: false};
        AddItem(newItem);
        setDescription("");
        setQuantity(1);
    }

    return (
    <>
        <form onSubmit={handleSubmit} className='p-4 d-flex justify-content-center align-items-center'>
            <h3 className='h4 fw-semibold'>What do you need for your 😍 trip?</h3>
            <select className='mb-2 ms-2 rounded-pill' value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
                {nums.map((num,index)=><option key={index} value={num}>{num}</option>)}
            </select>
            <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} className='rounded-pill ms-2 mb-2 ps-4 py-2' placeholder='Items...'></input>
            <button className='rounded-pill ms-2 border-0 fw-bold mb-2'>ADD</button>
        </form>
    </>
    )
}
