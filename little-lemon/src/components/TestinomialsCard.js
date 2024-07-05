import React from "react";
import './TestinomialCard.css'

function TestinomialCard({rating, name, position, comment, photo}){
    return (
        <div class="testinomial-card">
            <h6>rating:{rating}</h6>
            <div class="person-info">
                <img src={photo} class="person-image"/>
                <div class="person-text-info">
                    <p>{name}</p>
                    <p>{position}</p>
                </div>
            </div>
            <p class="text">
                {comment}
            </p>
        </div>
    )
}

export default TestinomialCard;