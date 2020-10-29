import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { db, auth } from './firebase';

function Login() {
    const history = useHistory();  // allows us to programmatically change url
    const [email, setEmail] = useState('');  // don't have null
    const [password, setPassword] = useState(''); 
    
    const signIn = e => {
        e.preventDefault(); // prevent refresh
        
        // some fancy firebase login
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault(); // not needed in here
        
        // do some fancy firebase register
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                console.log(auth);
                if(auth){
                    history.push('/'); // redirect
                }
            })
            .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5> 
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
                </p>
                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
