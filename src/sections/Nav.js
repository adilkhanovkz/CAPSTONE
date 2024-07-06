import React from 'react';
import { Link } from 'react-router-dom';



function Nav(){
    return (
        <nav>
            <Link to="/" className="nav-item"><h3>Home</h3></Link>
            <Link to="/about" className="nav-item"><h3>About</h3></Link>
            <Link to="/menu" className="nav-item"><h3>Menu</h3></Link>
            <Link to="/reservations" className="nav-item"><h3>Reservations</h3></Link>
            <Link to="/order-online" className="nav-item"><h3>Order online</h3></Link>
            <Link to="/login" lassName="nav-item"><h3>Login</h3></Link>
        </nav>
    );
}

export default Nav;