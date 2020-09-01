import React from 'react';
import {NavLink} from "react-router-dom";

let Header = () => {
    return(
        <header className="header">
            <nav className="header__nav container">
                <ul className="header__nav-wrap">
                    <li className="header__nav-el">
                        <NavLink  to="/" className="header__nav-link">Главная</NavLink>
                    </li>
                    <li className="header__nav-el">
                        <NavLink  to="employees" className="header__nav-link" >Сотрудники</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )


}


export default Header;
