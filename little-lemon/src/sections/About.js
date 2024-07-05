import React from 'react';
import foto1 from '../icons_assets/Mario and Adrian A.jpg';
import './About.css';

function About(){
    return (
        <section class="section" id="about">
            <div class="flex-class">
                <div class="info">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h4>Good restaurant forever being best we organized hello word questions for our participant. 
                        And this is the thing which give as the benefits. 
                        Good restaurant forever being best we organized hello word questions for our participant. 
                        And this is the thing which give as the benefits. 
                        Good restaurant forever being best we organized hello word questions for our participant. 
                        And this is the thing which give as the benefits. 
                        Good restaurant forever being best we organized hello word questions for our participant. 
                        And this is the thing which give as the benefits. </h4>
                </div>
                <div className="image-container">
                    <img src={foto1} id="hero-image" className="image top-right" height={341}/>
                    <img src={foto1} id="hero-image" class="image bottom-left" width={314} height={341}/>
                </div>
            </div>
        </section>
    );
}

export default About;