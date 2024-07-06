import React from 'react';
import './Testinomials.css';
import TestinomialCard from '../components/TestinomialsCard';
import photo1 from '../icons_assets/photo1.png';

function Testinomials(){
    return (
        <section class="section" id="testinomials">
            <div >
                <div id="test-id"><h1>Testinomials</h1></div>
                <div class="testinomial-cards">
                    <TestinomialCard 
                        photo={photo1}
                        rating={5}
                        name="Sarah Joknson"
                        position="Marketing manager" 
                        comment="This restaurant has best garlic I ever tasted"
                        />
                    <TestinomialCard 
                        photo={photo1}
                        rating={5}
                        name="Sarah Joknson"
                        position="Marketing manager" 
                        comment="This restaurant has best garlic I ever tasted"
                        />
                    <TestinomialCard 
                        photo={photo1}
                        rating={5}
                        name="Sarah Joknson"
                        position="Marketing manager" 
                        comment="This restaurant has best garlic I ever tasted"
                        />
                    <TestinomialCard 
                        photo={photo1}
                        rating={5}
                        name="Sarah Joknson"
                        position="Marketing manager" 
                        comment="This restaurant has best garlic I ever tasted"
                        />
                </div>
            </div>
        </section>
    );
}

export default Testinomials;