import React from 'react';
import BigButton from '../components/BigButton';
import Card from '../components/Card';
import './Specials.css';
import image1 from '../icons_assets/greek salad.jpg';
import image2 from '../icons_assets/bruchetta.svg';
import image3 from '../icons_assets/lemon dessert.jpg';

function Specials(){
    return (
        <section class="section">
            <div id="specials">
                <div className="rows">
                    <h1>This Week Specials!</h1>
                    <BigButton title="Order Online"/>
                </div>
                <div className="rows">
                    <Card 
                        image={image1}
                        title="Greek salad" 
                        description="this salad is the best of the best. 
                        green as green garlic and olive particles "
                        price="12.99"/>
                    <Card 
                        image={image2}
                        title="Greek salad" description="this salad is the best of the best. 
                        green as green garlic and olive particles "
                        price="12.99"/>
                    <Card 
                        image={image3}
                        title="Greek salad" description="this salad is the best of the best. 
                        green as green garlic and olive particles "
                        price="12.99"/>

                </div>
            </div>
        </section>
    );
}

export default Specials;