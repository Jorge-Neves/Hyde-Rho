import styled from "styled-components";



export const DetailsLandingContainer = styled.section`
    background-color: #C2EDEC;
	height: 800px;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: -1;
`;


export const GraphContainer = styled.section`
    background-color: #E5EDF1;
	height: 800px;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const DetailsImg = styled.div`
    position: absolute;
    filter: opacity(60%);
    z-index: 0;
    width: 99vw;
    .DetailsImage {
        height: 80vh;
		filter: opacity(60%);
    }
`;

export const DetailsH1 = styled.div`
    color: #313246;
    font-weight: 500;
    font-size: 100px;
  
    

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width: 480px) {
        font-size: 40px;
    }
`;
