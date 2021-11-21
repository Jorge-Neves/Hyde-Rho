import styled from "styled-components";



export const AboutLandingContainer = styled.section`
    background-color:#C2EDEC;
	height: 800px;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	
	
`;

export const AboutContent = styled.section`
    background-color:#C2EDEC;
	height: 800px;
	width: 50vw;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	
	
	
	
`;

export const AboutImg = styled.div`
    position: absolute;
    filter: opacity(40%);
    z-index: 0;
    width: 99vw;
    .AboutImage {
        height: 80vh;
		filter: opacity(60%);
    }
`;

export const AboutH1 = styled.div`
    color: #313246;
    font-weight: 500;
    font-size: 50px;
	padding-left: 10vw;
  
    

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width: 480px) {
        font-size: 40px;
    }
`;

export const AboutP = styled.div`
    margin-top:24px;
    color: #313246;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    margin-bottom: 10px;
	z-index: 2;

	.contacts{
		text-decoration: none !important;
		color: #313246;
	}

	a { 
		text-decoration: none !important;
		color: #313246;
	}

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const AboutCard = styled.div`
     display: flex;
     flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
	padding-left: 10vw;

`;
