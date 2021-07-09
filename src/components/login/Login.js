import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import logolarge from '../../images/logolarge.svg';
import Header from '../header/Header';
import axios from 'axios';
import './login.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => {
const history = useHistory();
  const [login, setTextLog] = useState("");
  const [password, setTextPass] = useState("");

  const handleSubmit = (e) => {
    if((!/[A-Z]/.test(password)) 
      && (!/[a-z]/.test(password)) 
      || (!/[0-9]/.test(password)) 
      || ((login.length && password.length) < 6)
    ) {
        alert('Некорректные данные. Пароль должен содержать латинские символы и цифры.') 
      } else {
          e.preventDefault();
          const formData = new FormData(e.target);
          axios.post("http://localhost:5000/api/auth/login", {
            email: formData.get("login"),
            password: formData.get("password")
          }, 
          {
            headers: 
              {
                'Content-type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*'
              }
          }).then((res) => {
            localStorage.setItem('token', res.data.token)
            history.push("/allNotes")
          });
        }
  }

  return (
      <div>
        <Header>Войти в систему</Header>
        <div className="appCont">
          <div className="container">
            <img src={logolarge} className="App-logobig" alt="logo" />
            <form onSubmit={handleSubmit} className="entryCont">
              <h1 className="welcomeText">Войти в систему</h1>
              <div className="formBlock">
                <label className='entryText'>Login:</label>
                <TextField
                  required 
                  id='login' 
                  name="login" 
                  onChange={(e) => setTextLog(e.target.value)} 
                  type="text" 
                  value={login} 
                  placeholder="Login" 
                  variant="outlined" />
              </div>
              <div className="formBlock">
                <label className='entryText'>Password:</label>
                <TextField
                  required 
                  id='password' 
                  name="password" 
                  onChange={(e) => setTextPass(e.target.value)} 
                  type="text" 
                  value={password} 
                  placeholder="Password" 
                  variant="outlined" />
              </div>
              <div className="formBlockBtn">
                <Button 
                  variant="contained" 
                  color="primary" 
                  type="submit">Войти</Button>
                <Link to="/registration" className="linkBtn">Зарегистрироваться</Link>
              </div>
            </form>
            </div>
          </div>
        </div>
  )
}

export default Login;