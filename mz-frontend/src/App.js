import React from 'react';
import './App.scss';

import { About, Footer, Header, Skills, Work } from './containers';
import { Navbar } from './components';

const App = () => (
    <div className='app'>
    
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
    
    </div>
);

export default App;