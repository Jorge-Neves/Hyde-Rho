import styled from "styled-components";

export const EcoContainer = styled.div`
    background: #E5EDF1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    button {
    text-decoration: none;
    padding: 2vh 2.77vw;
    border: 2px solid #313246;
    border-radius: 39px;
    background: none;
    color: #313246;
    font-size: 2.22vw;
    width: 36.45vw;
    transition: background-color, color 0.9s ease-in;
    
}

    button:hover {
        background-color: #fff;
        color: #00364D;
        cursor: pointer;
    }
`;

export const EcoImage = styled.div`
    position: absolute;
    filter: opacity(60%);
    object-fit: scale-down;
    height: 800px;
    z-index: -1;
    @media screen and (max-width: 768px) {
        top: 50px;
    }

`;

export const EcoP = styled.div`
    margin-top:24px;
    color: #313246;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;


export const EcoContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20vh;

    .buttonLink{
        text-decoration: none;
        color: #313246;
    }
`;

