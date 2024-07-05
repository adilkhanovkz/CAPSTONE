import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testinomials from './Testinomials';
import About from './About';

function Main(){
    return (
        <main>
            <Hero />
            <Specials />
            <Testinomials />
            <About />
        </main>
    );
}

export default Main;