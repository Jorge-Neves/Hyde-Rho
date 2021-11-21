import React from 'react';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroImg, HeroCard, HeroRow, HeroRowTitle } from './HeroElements';
import Button from "react-bootstrap/Button";

const HeroSection = () => {
    return (
        <HeroContainer id='hero'>
            <HeroImg>
                    <img src="/HeroWaterMark.svg" alt="Vector cartoon man in shower" className="HeroImage" />
                </HeroImg>
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome User</HeroH1>

                <HeroRow>
                    <HeroCard>
                        <HeroP>
                            Learn more about your water usage
                        </HeroP>
                        <Button><a href="https://info.oras.com/en/oras-hydractiva-digital" target="_blank" className="buttonLink">Graphs</a></Button>
                    </HeroCard>
                    <HeroCard>
                        <HeroP>
                            Save water to help your flower grow
                        </HeroP>
                        <Button>Flower</Button>
                    </HeroCard>
                </HeroRow>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
