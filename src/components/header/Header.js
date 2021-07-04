import React from 'react';
import { useHistory } from "react-router-dom"
import logomini from '../../images/logomini.svg';

const Header = (props) => {
    let history = useHistory();

    const exitFunc = () => {

    }

    return (
        <header className="headerApp">
          <div className="headerLogo">
            <img src={logomini} alt="logo" />
          </div>
            <p className="headerTitle">
                {props.children}
            </p>
            {props.button && <button onClick={() => exitFunc()} className="headerBtn">Выход</button>}
        </header>
    )
}

export default Header