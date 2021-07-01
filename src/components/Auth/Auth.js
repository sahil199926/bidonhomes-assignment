import React from 'react'
import { useHistory, Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom'
import Home from '../Home/Home';
import Login from '../Auth/Login/Login';

function Auth() {
   

    const AuthLogin = ({ component: Component, ...rest }) => {
     const login= JSON.parse(localStorage.getItem('userLogedin'))
        return (
            <Route
                {...rest}
                render={props=>login===true?
                    <Component {...props} /> :
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}
                    />

                }
            />

        )


    }
    // const Signup = ({ component: Component, ...rest }) => {
    //     const user= JSON.parse(localStorage.getItem('user'));
    //     return (
    //         <Route
    //             {...rest}
    //             render={props=>user ?
    //                 <Component {...props} /> :
    //                 <Redirect
    //                     to={{
    //                         pathname: '/',
    //                         state: { from: props.location }
    //                     }}
    //                 />

                    
    //             }
    //         />

    //     )


    // }

    return (<>
    <Router>
        <Switch>
            <AuthLogin path='/home' component={Home}/>
            <Route exact path="/">
            <Login />
            </Route>
        </Switch>
    </Router>
        
    </>
    )
}

export default Auth
