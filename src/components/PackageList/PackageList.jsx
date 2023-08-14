import { useState } from "react";
import Items from "../Items/Items";

function PackageList({items,setItems}) {
    const [sortBy,setSortBy]= useState("input");
    let sortItems;

    function deleteItem(id){
        setItems((items)=>items.filter((item)=> item.id !== id))
    }

    function handleToggleItem(id){
        setItems((items)=>items.map((item)=>item.id === id? {...item,packed: !item.packed} : item))
    }
    
    if(sortBy === "input") sortItems = items;

    if(sortBy === "description") sortItems= items.slice().sort((a,b)=>a.description.localeCompare(b.description));

    if(sortBy === "packed") sortItems= items.slice().sort((a,b)=>Number(a.packed) - Number(b.packed))

    function clearItems(){
        const confirmed= window.confirm("Are you sure you want to delete all items?");
        if(confirmed) setItems([]);
    }
    
    return (
        <>
            <div className="packageList p-5 d-flex flex-column justify-content-between">
                <ul className="list-unstyled row px-5">
                    {sortItems.map((item,index)=><Items key={index} item={item} deleteItem={deleteItem} handleToggleItem={handleToggleItem}/>)}
                </ul>
                <div className="action d-flex justify-content-center">
                    <select className="rounded-pill px-5 py-1" value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                        <option value="input">Sort by input order</option>
                        <option value="description">Sort by description</option>
                        <option value="packed">Sort by packed status</option>
                    </select>
                    <button className="rounded-pill px-4 py-1 ms-2 border-0" onClick={clearItems}>Clear List</button>
                </div>
            </div>
        </>
    )
}

export default PackageList
