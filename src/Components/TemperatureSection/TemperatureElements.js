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

    .buttonLink{
        text-decoration: none;
        color: #313246;
    
    }

    button {
    text-decoration: none;
    padding: 2vh 2vw;
    border: 2px solid #313246;
    border-radius: 39px;
    background: none;
    color: #313246;
    font-size: 1.8vw;
    width: 20vw;
    transition: background-color, color 0.9s ease-in;
    
}

    button:hover {
        background-color: #fff;
        color: #00364D;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        button {
    
        font-size: 3.33vw;
        }
    }
`;

export const TemperatureH1 = styled.div`
    color: #313246;
    font-weight: 500;
    font-size: 45px;
  
    

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const TemperatureImage = styled.div`
    position: absolute;
    filter: opacity(40%);
    left: 100px;
    object-fit: scale-down;
    height: 800px;
    z-index: -1;

    .TemperatureImg {
        height: 800px;
    }

    @media screen and (max-width: 768px) {
        position: absolute;
        filter: opacity(40%);
        left: 15px;
        height: 800px;
        z-index: -1;
    }
`;


export const TemperatureContent = styled.div`
     display: flex;
     flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10vw;

`;

export const TemperatureContentText = styled.div`
     display: flex;
     flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

`;