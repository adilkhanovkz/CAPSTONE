import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

import icon from '../icons_assets/logo.ico';

function Footer(){
    return (
        <footer class="section">
            <div class="flex-class">
                <img src={icon} height={100}/>
                <div>
                    <h6>Dormat navigation</h6>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/about"><p>About</p></Link>
                    <Link to="/menu"><p>Menu</p></Link>
                    <Link to="/reservations"><p>Reservations</p></Link>
                </div>
                <div>
                    <h6>Contact</h6>
                    <p>Chicago, Little Lemon st. 41</p>
                    <p>+7(777)777 77 77</p>
                    <p>little-lemon@gmail.com</p>
                </div>
                <div >
                    <h6>Social links</h6>
                    <a href="https://instagram.com" target='_blank'><p>Instagram</p></a>
                    <a href="https://facebook.com" target='_blank'><p>Facebook</p></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;