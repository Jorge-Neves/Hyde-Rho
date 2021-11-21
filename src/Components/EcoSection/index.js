import React from 'react';
import { EcoContainer, EcoImage, EcoP, EcoContent } from './EcoElements';
import Button from "react-bootstrap/Button";

const Eco = () => {
    return (
        <EcoContainer>
            <EcoImage>
                <img src="/LogoSVGWater.svg" alt="A cartoon vector water droplet" className="EcoImg" />
            </EcoImage>
            <EcoContent>
                <EcoP>Learn more about how to reduce your water usage</EcoP>
                <Button><a href="https://info.oras.com/en/oras-hydractiva-digital" target="_blank" className="buttonLink">Read more</a></Button>
            </EcoContent>
        </EcoContainer>
    )
}

export default Eco;
