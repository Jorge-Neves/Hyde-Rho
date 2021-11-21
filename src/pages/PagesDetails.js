import React, { useState, useEffect, useCallback } from 'react'
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar/index';
import Sidebar from '../Components/Sidebar';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import Temperature from '../Components/TemperatureSection';
import Eco from '../Components/EcoSection';
import DetailsComponent from '../Components/Details/indexDetails'
import ConsumptionWeek from '../Components/Details/ConsumptionWeek';
import ConsumptionThree from '../Components/Details/ConsumptionThreeDays';
import ConsumptionMonth from '../Components/Details/ConsumptionMonth';
import FlowTimeWeek from '../Components/Details/FlowTimeWeek';
import FlowTimeMonth from '../Components/Details/FlowTimeMonth';
import FlowTimeThree from '../Components/Details/FlowTimeThree';
import PowerConsumptionWeek from '../Components/Details/PowerConsumptionThree';
import PowerConsumptionMonth from '../Components/Details/PowerConsumptionMonth';
import PowerConsumptionThree from '../Components/Details/PowerConsumptionWeek';

const Details = () => {
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
                    <DetailsComponent id='details'/>
                    <PowerConsumptionThree />
                    <PowerConsumptionWeek />
                    <PowerConsumptionMonth />
                    <ConsumptionThree />
                    <ConsumptionWeek />
                    <ConsumptionMonth />
                    <FlowTimeThree />
                    <FlowTimeWeek />
                    <FlowTimeMonth />
                   
                    
            </Carousel>
        </>
    ) : (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <DetailsComponent id='details'/>
                    <PowerConsumptionThree />
                    <PowerConsumptionWeek />
                    <PowerConsumptionMonth />
                    <ConsumptionThree />
                    <ConsumptionWeek />
                    <ConsumptionMonth />
                    <FlowTimeThree />
                    <FlowTimeWeek />
                    <FlowTimeMonth />
                    
        </>
    )
}

export default Details;
;