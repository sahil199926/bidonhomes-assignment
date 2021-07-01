import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'
import{useDispatch} from 'react-redux';
import {SignUp} from '../../Redux/Action';
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
        <div>
                <input placeholder='enter name' value={newName} onChange={(e)=>setNewName(e.target.value)} />
                <input  placeholder='enter email' value={newEmail} onChange={(e)=>setNewEmail(e.target.value)}/>
                <button onClick={signup}>signup</button>
            </div>
    )
}
