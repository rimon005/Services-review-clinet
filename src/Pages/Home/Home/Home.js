import React, { useEffect } from 'react';
import Contact from '../../Contact/Contact';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    useEffect(()=> {
        document.title = "Barrister | Home"
    } ,[])
    return (
        <div>
            <Banner />
            <Services />
            <About />
            <Contact />
        </div>
    );
};

export default Home;