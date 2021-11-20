import React from 'react';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
    return (
        <HeroContainer id='hero'>
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Lorem Ipsum</HeroH1>
                <HeroP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sagittis enim a lobortis auctor. Duis feugiat, dui a bibendum consectetur, quam ex luctus nisl, vitae lacinia purus nisl vitae ante. Maecenas vel ullamcorper metus. Sed vel suscipit libero, sed ullamcorper metus.
                </HeroP>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
