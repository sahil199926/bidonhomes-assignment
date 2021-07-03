import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './Home.css';
import SearchBar from '../SearchBar/SearchBar';
import Modal from '../Modal/Modal';
import EditModal from '../Modal/EditModal';
function Home() {
    const history = useHistory();
    const LoggedInUser = JSON.parse(localStorage.getItem('currentuser'))
    const [showModal, setShowModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [editProductId, setEditProductId] = useState(null);
    const [searchInp, setSearchInp] = useState("");
    const [maxPrice, setMaxPrice] = useState(100000)
    const [maxQuantity, setMaxQuantity] = useState(100)
    const [renderData, setRenderData] = useState(null);
    const user = useSelector(state => state[LoggedInUser]);
    const [applyFilter, setApplyFilter] = useState(false)
    const product_id = Object.keys(user.products).length || 0;
    const logout = () => {
        localStorage.setItem('userLogedin', JSON.stringify(false))
        localStorage.setItem('currentuser', JSON.stringify(null))
        history.push('/')
    }
    function Filtered() {
        let filteredData = [];
        if (applyFilter) {
            filteredData = renderData && renderData.filter((itm) => user.products[itm].name.includes(searchInp))
            setRenderData(filteredData);
        }
        else {
            filteredData = Object.keys(user.products).filter((itm) => user.products[itm].name.includes(searchInp))
            setRenderData(filteredData);
        }
    }

    function filterByPrice() {
        const filteredData = Object.keys(user.products).filter((itm) => Number(user.products[itm].quantity) <= Number(maxQuantity) && Number(user.products[itm].price) <= Number(maxPrice))
        setRenderData(filteredData)
        console.log(filteredData)
        console.log(
            maxQuantity,
            maxPrice)
    }

    function RenderList({ data }) {
        return (<div>
            {
                data.map((itm, i) => {
                    return (<div className='product-container'>
                        <div style={{ width: '30%' }} ><img style={{ width: '111px' }} src={user.products[itm].image} alt='no img' /></div>
                        <div style={{ width: '70%' }}  >
                            <div><b>Product Name: </b> {user.products[itm].name}</div>
                            <div style={{minHeight:"82px",overflow:"hidden",textOverflow:'ellipsis'}} ><b hidden={!user.products[itm].description} >Description: </b> {user.products[itm].description}</div>
                            <div style={{ display: 'flex' }} >
                                <div style={{ width: '50%' }}><b>Price: </b> {user.products[itm].price}</div>
                                <div style={{ width: '50%' }} ><b>Quantity: </b> {user.products[itm].quantity}</div>
                            </div>
                        </div>
                        <div><button className='edit-btn' onClick={() => { setEditModal(true); setEditProductId(itm) }} >Edit</button></div>
                    </div>
                    )
                })
            }
        </div>
        )
    }
    useEffect(() => {
        setRenderData(Object.keys(user.products))
    }, [user])

    useEffect(() => {
        Filtered();
    }, [applyFilter])

    return (<>
        <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            product_id={product_id}
            LoggedInUser={LoggedInUser}
        />
        {editProductId &&
            (<EditModal
                editModal={editModal}
                setEditModal={setEditModal}
                product_id={editProductId}
                product={user.products[editProductId]}
                LoggedInUser={LoggedInUser}
            />)}
        <div>
            <div className='nav' ><div className='header' ><div> welcome {user.name}</div>
            <button className='log-out' onClick={logout}>Log-out</button>
            </div>
            </div>
           
            {product_id == 0 && <div style={{paddingTop:'101px'}}> no product yet!! add now</div>}
            {product_id > 0 && (<div style={{paddingTop:'101px'}}>
                <SearchBar searchInp={searchInp}
                    setSearchInp={setSearchInp}
                    setMaxPrice={setMaxPrice}
                    setMaxQuantity={setMaxQuantity}
                    filterByPrice={filterByPrice}
                    maxQuantity={maxQuantity}
                    maxPrice={maxPrice}
                    Filtered={Filtered}
                    setRenderData={setRenderData}
                    renderData={renderData}
                    setApplyFilter={setApplyFilter}
                />
                {renderData && <RenderList data={renderData} />}
            </div>)
            }
            <button className='add-btn' onClick={() => setShowModal(true)} >+ add</button>
        </div>

    </>
    )
}
export default React.memo(Home)
