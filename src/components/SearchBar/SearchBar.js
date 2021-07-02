import React, { useEffect, useState } from 'react'

function SearchBar({ searchInp,Filtered,renderData,setRenderData,setSearchInp,setMinPrice,setMaxPrice,setMinQuantity,setMaxQuantity }) {
    function setPriceF(val){
        setMinPrice(val.split('-')[0])
        setMaxPrice(val.split('-')[1])
    }
    function setQuantityf(val){
        setMinQuantity(val.split('-')[0]);
        setMaxQuantity(val.split('-')[1]);
    }
    useEffect(()=>{
        Filtered()
    },[searchInp])
    
    return (
        <div>
            <input value={searchInp} onChange={(e) => setSearchInp(e.target.value)} />
            <select name="price" onChange={(e)=> setPriceF(e.target.value)}>
                <option value="0-100">0-100</option>
                <option value="101-500">101-500</option>
                <option value="501-5000">501-5000</option>
                <option value="5001-10000">5001-10000</option>
                <option value="10001-max">10000+</option>
            </select>
            <select name="quantity" onChange={(e)=>setQuantityf(e.target.value)} >
                <option value="0-5">0-5</option>
                <option value="6-10">5-10</option>
                <option value="11-20">11-20</option>
                <option value="20-max">20+</option>
            </select>

        </div>
    )
}

export default SearchBar;
