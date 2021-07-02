import React,{useState,useEffect} from 'react'
import '../Home/Home.css'
import {useDispatch} from 'react-redux';
import {AddProd} from '../Redux/Action';
function EditModal({editModal,setEditModal,product,product_id,LoggedInUser}) {
    const [quantity,setQuantity]=useState(product.quantity)
    const [description,setDescription]=useState(product.description)
    const [image,setImage]=useState(product.image)
    const [name,setName]=useState(product.name)
    const [price,setPrice]=useState(product.price)
    const dispatcher=useDispatch();
    useEffect(() => {
        setQuantity(product.quantity);
        setDescription(product.description);
        setImage(product.image);
        setName(product.name);
        setPrice(product.price);
    }, [product_id])
    function editProduct(){
        const email =LoggedInUser;
        const product_info={'name':name,'description':description,'price':price,'quantity':quantity,'image':image}
        dispatcher(AddProd(email,product_id,product_info));
    }

    return (
        <div className='edit-modal-container' hidden={!editModal}>
         <div className='edit-main-container'>
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


<button onClick={()=>setEditModal(false)} >X</button>
<button onClick={editProduct} >save Change</button>
             </div>
             </div>
    )
}

export default EditModal
