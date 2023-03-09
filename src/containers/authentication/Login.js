import { useState } from "react";
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState("");    
    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    }
    const handleLogin = (event) =>{
        axios.post('http://localhost:8080/login',
        {
            userEmail:email,
            userPassword:password
        },
        {
            headers:{
                'content-type':'application/json'
            }
        })
        .then(response=>{
            setIsLoggedIn(response.data);
        })
    }
    if(isLoggedIn==="")
        return(
            <div className="Login">
            Email:
            <input type="text" name="email" placeholder="example@email.com" value={email} onChange={handleEmailChange}/>
            Password:
            <input type="password" name="password" placeholder="password" value = {password} onChange={handlePasswordChange}/>
            <button onClick={handleLogin}>Log in</button>
        </div>
    )
    else
        return(<h2>isLoggedIn</h2>)
}

export default Login;