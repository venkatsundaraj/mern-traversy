import React from "react";
import { useState, useEffect } from "react";
import Module from './Register.module.css'

const Login = function(){
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [formValue, setFormValue] = useState({
        email:'',
        password:''
    })
    
    const formSubmitHandler = function(e){
        e.preventDefault()
        setFormValue({email:email,password:password})
    }
    return(
        <div className={Module.container}>
        <form onSubmit={formSubmitHandler}>
            <h1>Login and set the goals</h1>
            <div>
                <input type="text" name="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="text" name="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit">Login</button>
        </form>
        </div>
    )
}

export default Login