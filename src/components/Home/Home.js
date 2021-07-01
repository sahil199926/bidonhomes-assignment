import React from 'react'
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux'
function Home() {
    const history=useHistory();
    const LoggedInUser=JSON.parse(localStorage.getItem('currentuser'))
    const logout=()=>{
            localStorage.setItem('userLogedin',JSON.stringify(false))
            localStorage.setItem('currentuser',JSON.stringify(null))
            history.push('/')
    }
    const user=useSelector(state=>state[LoggedInUser]);
    console.log(user)
    return (
        <div>
            Home
            <button onClick={logout}>Log-out</button>
        </div>
    )
}

export default Home
