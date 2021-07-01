import React, { useState } from 'react'
import Signup from '../Signup/Signup';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'
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
        <div>
            <div>
                <input placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)} />
                <input  placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <button onClick={CheckCred}>login</button>
            </div>
            <Signup/>
            <div></div>
        </div>
    )
}

export default Login
