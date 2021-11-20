import React, { useState, useEffect, useNavigate } from "react";
import styled from "styled-components";


const LandingPageContainer = styled.section`
	background-color: #C2EDEC;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;


function Landing(){

        /* This component page would be the first thing the user would see they would click a something see an animation and be redirected to the home page */
        /* This will allow each button to render its respective variable */

        const [buttonPressed, setButtonPressed] = useState(false);
        const [image, setImage] = useState("");
      
        let navigate = useNavigate();



        /* functions that are called and change the useStates for each variable depending on which button is clicked */
        const toggleButton = () => {
            setButtonPressed(true);
            setImage("/placeholder.gif")
            setTimeout(() => {
                navigate("/home");
            }, 2000);
            }
         
        
        
        
        
        


       
        
    return(
        <>
           <LandingPageContainer>
                <h1>Landing Page</h1>
                <button onClick={toggleButton}> Enter </button>
                <img className="LandingImage" src={image} />
           </LandingPageContainer>
        
        </>
        
        )
}

export default Landing;
