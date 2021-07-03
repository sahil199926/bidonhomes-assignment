import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddProd } from '../Redux/Action';
import '../Home/Home.css'
function Modal({ showModal, setShowModal, product_id, LoggedInUser }) {
    const [quantity, setQuantity] = useState(1)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState("")
    const dispatcher = useDispatch();
    const restVal = () => {
        setQuantity('');
        setDescription('');
        setImage('');
        setName('');
        setPrice('');
    }
    function addProduct() {
        const email = LoggedInUser;
        const product_info = { 'name': name, 'description': description, 'price': price, 'quantity': Math.floor(Number(quantity)), 'image': image }
        dispatcher(AddProd(email, product_id, product_info));
    }

    return (
        <div className='modal-container' hidden={!showModal}>
            <div className='edit-main-container'>
                <div style={{ width: "34px", marginLeft: 'auto' }} ><button  className='log-out'style={{width:"30px",height: "30px",borderRadius:"10px"}} onClick={() => setShowModal(false)}  >X</button></div>
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
                            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>

                    </div>
                </div>
                <div>
                    <button className='save-btn' disabled={!name || !price || !quantity || !typeof (quantity) == 'number'} onClick={() => { setShowModal(false); addProduct(); restVal() }} >add</button>
                </div>

            </div>
        </div>
    )
}

export default Modal



