import React from "react";
import './BigButton.css'
import { Link } from "react-router-dom";

function BigButton({title, linkto}){
    return (
        <div class="big-button-container">
        <Link to={linkto}><button class="big-button">
            <h3>{title}</h3>
        </button></Link>
        </div>
    )
}

export default BigButton;