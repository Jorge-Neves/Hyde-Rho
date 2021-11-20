import React, { useState, useEffect, useCallback } from 'react'
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar/index';
import Sidebar from '../Components/Sidebar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import Temperature from '../Components/TemperatureSection';


const Home = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const handleWindowResize = useCallback(event => {

        setWindowSize(window.innerWidth);
  
    }, []); 

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, [handleWindowResize]);

    return windowSize <= 768 ? (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <Carousel>
                    <HeroSection id='hero'/>
                    <Temperature id='temperature'/>
            </Carousel>
        </>
    ) : (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <Temperature />
        </>
    )
}

export default Home;
;