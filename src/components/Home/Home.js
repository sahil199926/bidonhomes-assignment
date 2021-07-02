import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'
import './Home.css';
import SearchBar from '../SearchBar/SearchBar';
import Modal from '../Modal/Modal';
import EditModal from '../Modal/EditModal';
function Home() {
    const history=useHistory();
    const LoggedInUser=JSON.parse(localStorage.getItem('currentuser'))
    const [showModal,setShowModal]=useState(false);
    const [editModal,setEditModal]=useState(false);
    const [editProductId,setEditProductId]=useState(null);
    const [searchInp,setSearchInp]=useState("");
    const[Maxprice,setMaxPrice]=useState("")
    const [minPrice,setMinPrice]=useState("")
    const[maxQuantity,setMaxQuantity]=useState("")
    const [minquantity,setMinQuantity]=useState("")
    const [renderData,setRenderData]=useState(null);
    const user=useSelector(state=>state[LoggedInUser]);
    const product_id= Object.keys(user.products).length || 0;
    const logout=()=>{
            localStorage.setItem('userLogedin',JSON.stringify(false))
            localStorage.setItem('currentuser',JSON.stringify(null))
            history.push('/')
        }
    function Filtered(){
        const filteredData=Object.keys(user.products).filter((itm)=>user.products[itm].name.includes(searchInp))
        setRenderData(filteredData);
    }

    useEffect(()=>{
        setRenderData(Object.keys(user.products))
    },[user])

    function RenderList({data}){
return(<div>
    {
       data.map((itm,i)=>{
           return(<div style={{display:'flex',marginBottom:'20px',padding:'18px',width:"50%",margin:"auto",boxShadow:'0 6.95652px 20.8696px rgb(0 0 0 / 5%)'}}>
            <div style={{width:'30%'}} ><img style={{width:'111px'}} src={user.products[itm].image} alt='no img' /></div>
            <div style={{width:'70%'}}  >
            <div>{user.products[itm].name}</div>
            <div>{user.products[itm].description}</div>
            <div style={{display:'flex'}} >
            <div style={{width:'50%'}}>{user.products[itm].price}</div>
            <div style={{width:'50%'}} >{user.products[itm].quantity}</div>
            </div>
            </div>
            <div><button onClick={()=>{setEditModal(true);setEditProductId(itm)}} >Edit</button></div>
            </div>
           )
        })
    }
    </div>
)
    }
    return (<>
    <Modal
    showModal={showModal}
    setShowModal={setShowModal}
    product_id={product_id}
    LoggedInUser={LoggedInUser}
    />
    {editProductId&&
    (<EditModal
    editModal={editModal}
    setEditModal={setEditModal}
    product_id={editProductId}
    product={user.products[editProductId]}
    LoggedInUser={LoggedInUser}
    />)}
        <div>
            welcome 
            {user.name}
            Home
            <button onClick={logout}>Log-out</button>
            {product_id==0 &&<div> no product yet!! add now</div>}
            {product_id>0 &&(<div>
                <SearchBar searchInp={searchInp}
                 setSearchInp={setSearchInp}
                 setMinPrice={setMinPrice}
                 setMaxPrice={setMaxPrice}
                 setMinQuantity={setMinQuantity}
                 setMaxQuantity={setMaxQuantity}
                 Filtered={Filtered}
                 setRenderData={setRenderData}
                 renderData={renderData}
                 />
                {/* {!searchInp&&
               (<div> {
                    Object.keys(user.products).map((itm,i)=>{
                       return(<div style={{display:'flex',marginBottom:'20px',padding:'18px',width:"50%",margin:"auto",boxShadow:'0 6.95652px 20.8696px rgb(0 0 0 / 5%)'}}>
                        <div style={{width:'30%'}} ><img style={{width:'111px'}} src={user.products[itm].image} alt='no img' /></div>
                        <div style={{width:'70%'}}  >
                        <div>{user.products[itm].name}</div>
                        <div>{user.products[itm].description}</div>
                        <div style={{display:'flex'}} >
                        <div style={{width:'50%'}}>{user.products[itm].price}</div>
                        <div style={{width:'50%'}} >{user.products[itm].quantity}</div>
                        </div>
                        </div>
                        <div><button onClick={()=>{setEditModal(true);setEditProductId(itm)}} >Edit</button></div>
                        </div>
                       )
                    })
                }


            </div>)}
            {searchInp&&
               (<div> 
                   <Filtered/>
            </div>)} */}
{renderData&& <RenderList data={renderData} />}
            </div>)
            }
            <button onClick={()=>setShowModal(true)} >add</button>
            </div>

        </>
    )
}
export default Home
