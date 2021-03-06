import React, { useState } from 'react';
import { 
Switch,
Route,
Link,
Redirect,
useHistory  
} from 'react-router-dom';
import logolarge from '../../images/logolarge.svg';
import Header from '../header/Header';
import axios from 'axios';
import './registration.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Registration = () => {
  let history = useHistory();
  const [login, setLog] = useState("");
  const [password, setPass] = useState("");
  const [repPassword, setRepPass] = useState("");

  const handleSubmit = async (e) => {
    if(password !== repPassword) {
      alert('Не совпадают пароли') 
    } else {
      if((!/[A-Z]/.test(password)) 
        && (!/[a-z]/.test(password)) 
        || (!/[0-9]/.test(password)) 
        || ((login.length && password.length) < 6)
      ) {
        alert('Некорректные данные. Пароль должен содержать латинские символы и цифры.') } else {
          e.preventDefault();
        const formData = new FormData(e.target)
        await axios.post("http://localhost:5000/api/auth/register", {
          email: formData.get("login"),
          password: formData.get("password"),
        }, {
              headers: 
                {
                  'Content-type': 'application/json;charset=utf-8',
                  'Access-Control-Allow-Origin': '*'
                }
            }).then((result) => {
              localStorage.setItem("token", result.data.token)
              history.push("/allNotes")
            });
        }
    }
  }

  return (
    <div>
      <Header>Зарегистрироваться в системе</Header>
      <div className="appCont">
          <div className="container">
            <img src={logolarge} className="App-logobig" alt="logo" />
            <form onSubmit={handleSubmit} className="entryCont">
              <h1 className="welcomeText">Регистрация</h1>
              <div className="formBlock">
                <label className='entryText'>Login:</label>
                <TextField 
                  required
                  id='login' 
                  name="login" 
                  onChange={(e) => setLog(e.target.value)} 
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
                    name="password" onChange={(e) => setPass(e.target.value)} 
                    type="text" 
                    value={password} 
                    placeholder="Password"
                    variant="outlined" />
                </div>
                <div className="formBlock">
                  <label className='entryText'>Repeat password:</label>
                  <TextField 
                    id='repPassword' 
                    name="repPassword" 
                    onChange={(e) => setRepPass(e.target.value)} 
                    type="text" 
                    value={repPassword} 
                    placeholder="Repeat password" 
                    variant="outlined" />
                </div>
                <div className="formBlockBtn">
                  <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit">Зарегистрироваться</Button>
                  <Link to="/login" className="linkBtn">Авторизоваться</Link>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Registration;