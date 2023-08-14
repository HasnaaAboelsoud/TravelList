import React from 'react'

export default function Items({item,handleToggleItem,deleteItem}) {
    return (
        <li className='col-md-3'>
            {item.packed?<input
                type="checkbox"
                value={item.packed}
                onChange={() => handleToggleItem(item.id)}
                checked
                />:<input
                type="checkbox"
                value={item.packed}
                onChange={() => handleToggleItem(item.id)}
                checked= {false}
                />}
            <span className='h5 ps-2' style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button className='bg-transparent border-0 ps-2 h5' onClick={() => deleteItem(item.id)}>❌</button>
        </li>
    )
}
