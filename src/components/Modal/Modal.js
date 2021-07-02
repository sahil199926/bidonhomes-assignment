import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import {AddProd} from '../Redux/Action';
import '../Home/Home.css'
function Modal({showModal,setShowModal,product_id,LoggedInUser}) {
    const [quantity,setQuantity]=useState('')
    const [description,setDescription]=useState('')
    const [image,setImage]=useState('')
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const dispatcher=useDispatch();
    const restVal=()=>{
        setQuantity('');
        setDescription('');
        setImage('');
        setName('');
        setPrice('');
    }
    function addProduct(){
        const email =LoggedInUser;
        const product_info={'name':name,'description':description,'price':price,'quantity':quantity,'image':image}
        dispatcher(AddProd(email,product_id,product_info));
    }

    return (
        <div className='modal-container' hidden={!showModal}>
         <div className='main-container'>
             <button onClick={()=>setShowModal(false)} >X</button>
             <div>
                 <p>Qauantity</p>
                 <input type='tel' value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                 <p>description</p>
                 <input value={description} onChange={(e)=>setDescription(e.target.value)}/>
                 <p>image</p>
                 <input value={image} onChange={(e)=>setImage(e.target.value)}/>
                 <p>name</p>
                 <input  value={name} onChange={(e)=>setName(e.target.value)}/>
                 <p>price</p>
                 <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)}/>
                 <button disabled={!name ||!price || !quantity} onClick={()=>{setShowModal(false);addProduct();restVal()}} >add</button>
             </div>
         </div>
     </div>
    )
}

export default Modal
