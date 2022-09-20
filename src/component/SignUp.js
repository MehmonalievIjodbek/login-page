import React, { useState } from 'react';
import './global.scss';
import Photo from '../img/1.png';
import axios from 'axios';

const SignUp = ({setChanges}) => {
    const [firstName, setFirstName ] = useState('')
    const [lastName, setLastName ] = useState('')
    const [userName, setUserName ] = useState('')
    const [password, setPassword ] = useState('')
 
  

    const signUp = async () => {
        try {
          const { data: response } = await axios.post(
            "http://192.168.1.10:5000/auth/signup", {
                username: userName,
                password: password,
                firstName: "Daadwadwdvron",
                lastName: 'Qodadawdwaadiriy',
            },
          );
          console.log(response);
        } catch (error) {
          console.error(error.message);
        }
      };
    return (
        <div className='sign-up'>
            <div className="container">
                <div className="login-auth">
                    <div className="login-photo">
                        <img src={Photo} alt="" />
                    </div>
                    <div className="login-account">
                        <p>Welcome back</p>
                        <h1>Sign Up to your account</h1>
                        <div className="login-input">
                            <label>FirstName</label>
                            <br />
                            <input type="text" placeholder='FirstName' onChange={(e) => setFirstName(e.target.value)} />
                            <br />
                            <label>LastName</label>
                            <br />
                            <input type="text" placeholder='LastName' onChange={(e) => setLastName(e.target.value)}  />
                            <br />
                            <label>Username</label>
                            <br />
                            <input type="text" placeholder='Username' onChange={(e) => setUserName(e.target.value)} />
                            <br />
                            <label>Password</label>
                            <br />
                            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

                        </div>
                        <div className="login-forgot-password">
                            <div>
                                <input type="radio" />
                                <label>Remember me</label>
                            </div>

                            <div className="login-password">
                                <a href="/">Forgot password?</a>
                            </div>
                        </div>
                        <div className="login-button">
                            <div className="login-now-button">
                                <button onClick={() => signUp()}> Sign Up </button>
                                <br />
                                <button onClick={() => setChanges(true)}> Login now </button>


                            </div>
                        </div>
                        <div className="login-join">
                            <p>Dont have an account? <a href="/">Join free today</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SignUp