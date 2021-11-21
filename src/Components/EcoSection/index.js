import React from 'react';
import { EcoContainer, EcoImage, EcoP, EcoContent } from './EcoElements';
import Button from "react-bootstrap/Button";
import Fade from 'react-reveal/Fade';

const Eco = () => {
    return (
        <EcoContainer>
            <EcoImage>
                <img src="/LogoSVGWater.svg" alt="A cartoon vector water droplet" className="EcoImg" />
            </EcoImage>
            <Fade Bottom>
            <EcoContent>
                <EcoP>Learn more about how to reduce your water usage</EcoP>
                <Button><a href="https://info.oras.com/en/oras-hydractiva-digital" target="_blank" className="buttonLink">Read more</a></Button>
            </EcoContent>
            </Fade>
        </EcoContainer>
    )
}

export default Eco;
