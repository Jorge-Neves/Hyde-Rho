import React from 'react';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroImg, HeroCard, HeroRow, HeroRowTitle } from './HeroElements';
import Button from "react-bootstrap/Button";
import Fade from 'react-reveal/Fade';

const HeroSection = () => {
    return (
        <HeroContainer id='hero'>
            <HeroImg>
                    <img src="/HeroWaterMark.svg" alt="Vector cartoon man in shower" className="HeroImage" />
                </HeroImg>
            <HeroBg>
            </HeroBg>
            <HeroContent>
            <Fade Bottom>
                <HeroH1>Welcome User</HeroH1>
                </Fade>
                <Fade Bottom>
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
                </Fade>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
