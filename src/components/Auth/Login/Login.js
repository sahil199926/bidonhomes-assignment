import React, { useState } from 'react'
import Signup from '../Signup/Signup';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'
import './Login.css'
function Login() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("")
    const history=useHistory();
    const selector=useSelector(state=>state)
    const CheckCred=()=>{
        const dataBase=JSON.parse(localStorage.getItem('database'))||selector;
        const AlluserEmail=Object.keys(dataBase)
        if(AlluserEmail.includes(email)&&dataBase[email].name==name){
            localStorage.setItem('userLogedin',JSON.stringify(true))
            localStorage.setItem('currentuser',JSON.stringify(email))
            history.push('/home')
        }
        else{
            alert('user email or name is incorrect')
        }
    }
    return (
        <div style={{display:'flex',justifyContent:'center',marginTop:"200px"}} >
            <div className="login-container">
                <div  className='login-head'>Welcome Please Log-in Here !!</div>
                <div><input className="login-inp" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)} /></div>
                <div><input className="login-inp"  placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
                <div><button className="login-btn" onClick={CheckCred}>login</button></div>
            </div>
            <Signup/>
        </div>
    )
}

export default Login
