import styled from "styled-components";

export const TemperatureContainer = styled.div`
    background: #A4B4C4;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
`;

export const TemperatureImage = styled.div`
    position: absolute;
    object-fit: scale-down;
    height: 800px;
    z-index: -1;

    .TemperatureImg {
        height: 800px;
    }

`;