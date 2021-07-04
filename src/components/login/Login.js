import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import logolarge from '../../images/logolarge.svg';
import Header from '../header/Header';
import axios from 'axios';
import './login.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => {
    let history = useHistory();

    const [login, setTextLog] = useState("");
    const [password, setTextPass] = useState("");

    const handleSubmit = async (e) => {
        
    }

    return (
        <div>
            <Header>Войти в систему</Header>
            <div className="appCont">
                <div className="container">
                    <img src={logolarge} className="App-logobig" alt="logo" />
                    <form onSubmit={handleSubmit} className="entryCont">
                        <p className="entryText">Войти в систему</p>
                        <div className="formBlock">
                            <label className='entryText'>Login:</label>
                            <TextField name="login" type="email" value={login} placeholder="Login" variant="outlined" />
                        </div>
                        <div className="formBlock">
                            <label className='entryText'>Password:</label>
                            <TextField name="password" type="text" value={password} placeholder="Password" variant="outlined" />
                        </div>
                        <div className="formBlockBtn">
                            <Button variant="contained" color="primary" type="submit" href="#contained-buttons">Войти</Button>
                            <Link to="/registration" className="linkBtn">Зарегистрироваться</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;