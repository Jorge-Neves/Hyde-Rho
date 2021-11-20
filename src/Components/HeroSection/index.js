import React from 'react';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroImg } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroImg>
                    <img src="/HeroWaterMark.svg" alt="Vector cartoon man in shower" />
                </HeroImg>
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome User</HeroH1>
                <HeroP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis enim a lobortis auctor. Duis feugiat, dui a bibendum consectetur, quam ex luctus nisl, vitae lacinia purus nisl vitae ante. Maecenas vel ullamcorper metus. Sed vel suscipit libero, sed ullamcorper metus.
                </HeroP>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
