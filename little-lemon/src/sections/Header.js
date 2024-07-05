import React from 'react';
import Nav from './Nav';
import logo from '../icons_assets/Logo.svg';
import './Header.css';

function Header(){
    return (
        <header class="section">
            <div  class="flex-class" id="header">
                <img src={logo} id="header-logo" class="image" width={193} height={52}/>
                <Nav />
            </div>
        </header>
    );
}

export default Header;