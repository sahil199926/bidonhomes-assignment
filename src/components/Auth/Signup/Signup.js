import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import{useDispatch} from 'react-redux';
import {SignUp} from '../../Redux/Action';
import '../Login/Login.css';
export default function Signup() {
    const [newName,setNewName]=useState("");
    const [newEmail,setNewEmail]=useState("")
    const history=useHistory();
    const dispatch=useDispatch();
    const signup=()=>{
        const AlluserEmail=Object.keys(JSON.parse(localStorage.getItem('database'))||{})
        if(AlluserEmail.includes(newEmail)){
            alert('user Email alerady exist')
            return;
        }
            dispatch(SignUp(newEmail,newName))
            localStorage.setItem('userLogedin',JSON.stringify(true))
            localStorage.setItem('currentuser',JSON.stringify(newEmail))
            history.push('/home')
    }
    return (
        <div className='login-container'>
            <div className='login-head' >New user ? Sign-up Here</div>
               <div><input  className="login-inp" placeholder='enter name' value={newName} onChange={(e)=>setNewName(e.target.value)} /></div> 
               <div><input  className="login-inp"  placeholder='enter email' value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}/></div> 
               <div><button className='login-btn' onClick={signup}>signup</button></div> 
            </div>
    )
}
