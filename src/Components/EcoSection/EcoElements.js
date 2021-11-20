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
    padding: 2vh 2.77vw;
    border: 2px solid #fff;
    border-radius: 39px;
    background: none;
    color: #fff;
    font-size: 2.22vw;
    width: 36.45vw;
    transition: background-color, color 0.3s ease-in;
}

    button:hover {
        background-color: #fff;
        color: #00364D;
        cursor: pointer;
    }
`;

export const EcoImage = styled.div`
    position: absolute;
    object-fit: scale-down;
    height: 800px;
    z-index: -1;

`;

