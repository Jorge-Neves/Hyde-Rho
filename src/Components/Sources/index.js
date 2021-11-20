import React from "react";
import styled from "styled-components";


const AboutContainer = styled.section`
    background-color: #f5bacf;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function Sources(){
    return(
        <AboutContainer>
            <h1>Let's be more Eco mindful</h1>
        </AboutContainer>
    )
}

export default Sources;