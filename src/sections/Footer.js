import React from 'react';
import './Footer.css';

import icon from '../icons_assets/logo.ico';

function Footer(){
    return (
        <footer class="section">
            <div class="flex-class">
                <img src={icon} height={100}/>
                <div>
                    <h6>Dormat navigation</h6>
                    <p>Home</p>
                    <p>About</p>
                    <p>Contacts</p>
                    <p>Specials</p>
                </div>
                <div>
                    <h6>Contact</h6>
                    <p>Address</p>
                    <p>+7(777)777 77 77</p>
                    <p>little-lemon@gmail.com</p>
                </div>
                <div >
                    <h6>Social links</h6>
                    <p>Instagram</p>
                    <p>Tiktok</p>
                    <p>Facebook</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;