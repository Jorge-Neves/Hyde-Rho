import React from 'react';
import { EcoContainer, EcoImage } from './EcoElements';
import Button from "react-bootstrap/Button";

const Eco = () => {
    return (
        <EcoContainer>
            <EcoImage>
                <img src="/LogoSVG.svg" alt="A cartoon vector water droplet" className="EcoImg" />
            </EcoImage>
            <Button>Join our community</Button>
        </EcoContainer>
    )
}

export default Eco;
