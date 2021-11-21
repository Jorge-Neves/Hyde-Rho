import React from 'react';
import { TemperatureContainer, TemperatureImage, TemperatureH1, TemperatureContent, TemperatureContentText } from './TemperatureElements';
import { HeroP, HeroCard, HeroRowTitle } from '../HeroSection/HeroElements';
import Button from "react-bootstrap/Button";
import Fade from 'react-reveal/Fade';


const Temperature = () => {
    return (
        <TemperatureContainer id='temperature'>
            <TemperatureImage>
                <img src="/TempWaterMark.svg" alt="A shower setup" className="TemperatureImg" />
            </TemperatureImage>
            <Fade Bottom>
            <TemperatureContent>
                 <TemperatureContentText>
                        <TemperatureH1>Your perfect shower temperature is:</TemperatureH1>
                        <TemperatureH1> <p>30ºC</p></TemperatureH1>
                </TemperatureContentText>
                <HeroRowTitle>
                    <HeroCard>
                        <HeroP>
                            Want to know more about your model?
                        </HeroP>
                        <Button><a href="https://www.oras.com/datasheet/421/en" target="_blank" className="buttonLink">Hydractiva</a></Button>
                    </HeroCard>
                </HeroRowTitle>
            </TemperatureContent>
            </Fade>

            
        </TemperatureContainer>
    )
}

export default Temperature;
