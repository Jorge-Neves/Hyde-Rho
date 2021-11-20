import React from "react";
import styled from "styled-components";


const AboutContainer = styled.section`
    background-color: #a8d6f7;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function About(){
    return(
        <AboutContainer>
            <h1>Meet the Team</h1>
        </AboutContainer>
    )
}

export default About;