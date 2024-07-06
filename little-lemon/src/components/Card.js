import React from "react";
import './Card.css'

function Card({title, image, description, price}){
    return (
        <div class="card">
            <div class="card-info">
                <img src={image} class="card-image" alt=""/>
                <div class="card-title text">
                    <h5>{title}</h5>
                    <h6 id="price"> ${price}</h6>
                </div>
                <p class="text">{description}</p>
            </div>
            <h7 class="text">
                Order delivery
            </h7>
        </div>
    )
}

export default Card;