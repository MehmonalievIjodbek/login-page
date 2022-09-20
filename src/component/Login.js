import React, { useEffect, useState } from 'react';
import './global.scss';
import Photo from '../img/1.png'
import { IoLogoGoogle } from 'react-icons/io';
import axios from 'axios'

const Login = ({ setChanges}) => {

    const [userName, setUserName ] = useState('')
    const [password, setPassword ] = useState('')

    
    const signIn = async () => {
        try {
          const { data: response } = await axios.post(
            "http://192.168.1.10:5000/auth/signin", {
                username: userName,
                password: password
            },
          );
          console.log(response);
        } catch (error) {
          console.error(error.message);
        }
      };


  return (
    <div className="container">
        <div className="login-auth">
            <div className="login-photo">
                <img src={Photo} alt=""/>
            </div>
            <div className="login-account">
                <p>Welcome back</p>
                <h1>Login to your account</h1>
                <div className="login-input">
                    <label>Username</label>
                    <br/>
                    <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
                    <br/>
                    <label>Password</label>
                    <br/>
                    <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="login-forgot-password">
                    <div>
                        <input type="radio"/>
                        <label>Remember me</label>
                    </div>

                    <div className="login-password">
                        <a href="/">Forgot password?</a>
                    </div>
                </div>
                <div className="login-button">
                    <div className="login-now-button">
                        <button onClick={() => signIn()}>Login now</button>
                        <br/>
                        <button onClick={() => setChanges(false)}> Sign Up </button>
                    </div>
                </div>
                <div className="login-join">
                    <p>Dont have an account? <a href="/">Join free today</a></p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Login