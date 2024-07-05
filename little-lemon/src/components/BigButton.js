import React from "react";
import './BigButton.css'

function BigButton({title}){
    return (
        <div class="big-button-container">
        <button class="big-button">
            <h3>{title}</h3>
        </button>
        </div>
    )
}

export default BigButton;