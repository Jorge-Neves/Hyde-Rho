import React, { useState, useEffect, useCallback } from 'react'
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar/index';
import Sidebar from '../Components/Sidebar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import Temperature from '../Components/TemperatureSection';
import Eco from '../Components/EcoSection';
import About from '../Components/About';
import Team from "../Components/TeamSection"
import Challenge from '../Components/ChallengeSection';

const Aboutus = () => {
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

    return windowSize <= 940 ? (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <Carousel>
                    <About id="about"/>
                    <Team id='team'/>
                    <Challenge id="challenge" />
            </Carousel>
        </>
    ) : (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <About id="about"/>
            <Team id='team'/>
            <Challenge id="challenge" />
        </>
    )
}

export default Aboutus;
;