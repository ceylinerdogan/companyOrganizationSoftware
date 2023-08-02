import { Button, TextField } from '@mui/material';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"


const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate1 = useNavigate();
    const navigate2 = useNavigate();
    const navigate3 = useNavigate();
    const navigate4 = useNavigate();
    
    const handleSubmit = (e) => {
    e.preventDefault();
    };

    function handleClickResetPass(event){
        navigate1('/resetpassword');
    }

    function handleClickActivateUser(event){
        navigate2('/activateuser');
    }

    function handleClicksSetPass(event){
        navigate3('/setpassword');
    }

    function handleClickSetNewPass(event){
        navigate4('/setnewpassword');
    }


    return (
        <div className='container'>
            <div className='box-login'>
                <form onSubmit={handleSubmit}>
                    <h2 className='login'>Login</h2>
                    <div>
                        <label className="labelEmail" htmlFor="email">Email Address</label>
                        <TextField 
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            placeholder="Email"
                            className='emailinput'
                        />
                    </div>
                    <div>
                        <label className="labelPass" htmlFor="password">Password</label>
                        <TextField
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            className='passwordinput'
                        />
                    </div>
                    
                    <div>
                        <Button 
                            className="signInbtn" 
                            onSubmit={handleSubmit} 
                            type="submit"
                            style={{ backgroundColor: '#034900',
                            color:'WhiteSmoke',
                            padding:'10px 200px',
                            borderRadius: '5px',
                            fontFamily: 'Arial, Helvetica, sans-serif',
                            }}
                            >Login</Button>
                    </div>
                    <div>
                        <Button 
                            className="forgotpassbtn" 
                            type="click" 
                            onClick={handleClickResetPass}
                            style={{ backgroundColor: '#034900',
                            color:'WhiteSmoke',
                            padding:'10px 30px',
                            borderRadius: '5px',
                            fontFamily: 'Arial, Helvetica, sans-serif',
                            }}
                            >Forgot Password?</Button>
                    </div>
                    <div>
                        <Button 
                            className="activateaccbtn" 
                            type="click" onClick={handleClickActivateUser}
                            style={{ backgroundColor: '#034900',
                            color:'WhiteSmoke',
                            padding:'9.5px 30px',
                            borderRadius: '5px',
                            fontFamily: 'Arial, Helvetica, sans-serif',
                            }}
                            >Activate Account</Button>
                    </div>
                     <div>
                        <Button className='setpass' onClick={handleClicksSetPass}>setpass</Button>
                        <Button  className='setnewpass'onClick={handleClickSetNewPass}>setnewpass</Button>
                    </div>
                </form>
            </div>
            
        </div>
        
    );
};

export default Login;
    