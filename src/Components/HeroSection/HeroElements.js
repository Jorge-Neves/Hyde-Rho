import styled from "styled-components";

export const HeroContainer = styled.div`
    background: #C2EDEC;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 100px;
    height: 800px;
    position: relative;
    z-index: 1;

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

        padding: 0 30px;

        button {
    
        font-size: 3.33vw;
        }
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .buttonLink{
        text-decoration: none;
        color: #313246;
    
    }
`;

export const HeroH1 = styled.div`
    color: #313246;
    font-weight: 700;
    font-size: 100px;
    padding-bottom: 10vw;
    padding-right: 30vw;
    

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.div`
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

export const HeroImg = styled.div`
    position: absolute;
    filter: opacity(60%);
    z-index: -1;
    width: 99vw;
    .HeroImage {
        height: 80vh;
    }
`;

export const HeroRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    

    @media screen and (max-width: 768px) {
        font-size: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }


`;


export const HeroRowTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-start;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }


`;

export const HeroCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10vw;

    @media screen and (max-width: 1000px) {
        margin-right: 8vw;
    }

`;
