import React, { useState, useEffect } from 'react'
import '../Home/Home.css'
import { useDispatch } from 'react-redux';
import { AddProd } from '../Redux/Action';
function EditModal({ editModal, setEditModal, product, product_id, LoggedInUser }) {
    const [quantity, setQuantity] = useState(product.quantity)
    const [description, setDescription] = useState(product.description)
    const [image, setImage] = useState(product.image)
    const [name, setName] = useState(product.name)
    const [price, setPrice] = useState(product.price)
    const dispatcher = useDispatch();
    useEffect(() => {
        setQuantity(product.quantity);
        setDescription(product.description);
        setImage(product.image);
        setName(product.name);
        setPrice(product.price);
    }, [product_id])
    function editProduct() {
        const email = LoggedInUser;
        const product_info = { 'name': name, 'description': description, 'price': price, 'quantity': Math.floor(Number(quantity)), 'image': image }
        dispatcher(AddProd(email, product_id, product_info));
    }

    return (
        <div className='edit-modal-container' hidden={!editModal}>
            <div className='edit-main-container'>
            <div style={{width:"34px",marginLeft:'auto'}} ><button  className='log-out' style={{width:"30px",height: "30px",borderRadius:"10px"}} onClick={() => setEditModal(false)} >X</button></div>
                <div>
                <div>
                    <div className='edit-input-container' >
                        <b>Quantity</b>
                        <input type='number' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>

                    <div className='edit-input-container'><b>Description</b>
                        <input value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div className='edit-input-container'><b>Image URL</b>
                        <input value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>

                    <div className='edit-input-container'><b>Name of product</b>
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>

                <div>
                    <div><b>Price</b>
                        <input type='number' value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>

                </div>
            </div>
            <div>
                        <button className='save-btn' disabled={!name || !price || !quantity} onClick={() => { editProduct(); setEditModal(false) }} >save Change</button>
                    </div>
                  
        </div>
       
        </div>
    )
}

export default EditModal
