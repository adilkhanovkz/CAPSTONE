import './App.css';
import React from 'react';
import Header from './sections/Header';
import Main from './sections/Main';
import Footer from './sections/Footer';
import Routing from './sections/Routes';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Routing />
      <Footer />

    </React.Fragment>
  );
}

export default App;
