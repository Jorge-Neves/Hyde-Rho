import React from 'react';
import { TemperatureContainer, TemperatureImage } from './TemperatureElements';

const Temperature = () => {
    return (
        <TemperatureContainer>
            <TemperatureImage>
                <img src="/TempWaterMark.svg" alt="A shower setup" className="TemperatureImg" />
            </TemperatureImage>
        </TemperatureContainer>
    )
}

export default Temperature;
