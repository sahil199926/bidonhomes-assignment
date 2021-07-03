import React, { useEffect, useState } from 'react'
import '../Home/Home.css'
import './SearchBar.css'
function SearchBar(props) {
    const { searchInp,
        Filtered,
        setApplyFilter,
        filterByPrice,
        setSearchInp,
        setMaxPrice,
        setMaxQuantity,
        maxQuantity,
        maxPrice}=props;
        
    useEffect(()=>{
        Filtered()
    },[searchInp])

    return (
        <div>
            <input placeholder='Search by name of product' className="search-inp" value={searchInp} onChange={(e) => setSearchInp(e.target.value)} />
            <div className='filter-container' >
            <p>price</p>
            <input className='filter-inp' type='number' placeholder="price starts from 1000"  value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <input type="range" min="1000" value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} max="100000"  class="slider" id="myRange"/>
            </div>
            <div className='filter-container'> 
            <p>quantity</p>
            <input className='filter-inp' type='number' placeholder='quantity starts from one' value={maxQuantity}  onChange={(e)=>setMaxQuantity(e.target.value)}/>
            <input type="range" min="1" max="100" value={maxQuantity}  onChange={(e)=>setMaxQuantity(e.target.value)} class="slider" id="myRange"/>
            </div>
            <div className='filter-btn-container' >
            <div><button className='filter-btn' onClick={()=>{setApplyFilter(true);filterByPrice()}} >apply Filters</button></div>
            <div><button className='filter-btn' onClick={()=>{setApplyFilter(false);setMaxQuantity(100);setMaxPrice(100000);} }>reset Filter</button></div>
            </div>

        </div>
    )
}

export default React.memo(SearchBar);
