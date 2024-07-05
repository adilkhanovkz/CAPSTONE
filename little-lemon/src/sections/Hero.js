import React from 'react';
import restauranfood from '../icons_assets/restauranfood.jpg';
import BigButton from '../components/BigButton';
import './Hero.css';

function Hero(){
    return (
        <section class="section" id="hero">
            <div class="flex-class">
                <div class="info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h4>
                        We are family owned Mediterranean restaurant,
                        focused on traditional recipes served with a modern twist.</h4>
                    <BigButton title="Reserve a Table"/>
                </div>

                <img src={restauranfood} id="hero-image" class="image" width={350} height={450} alt='hero-image'/>
            </div>
        </section>
    );
}

export default Hero;