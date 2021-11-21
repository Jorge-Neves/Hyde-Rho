import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const LandingPageContainer = styled.section`
	background-color: #C2EDEC;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: row;
	align-items: center;
	justify-content: center;
    z-index: -1;

    .PrePress{
        z-index: 0;
    }
`;


function Landing(){

        /* This component page would be the first thing the user would see they would click a something see an animation and be redirected to the home page */
        /* This will allow each button to render its respective variable */

        const [buttonPressed, setButtonPressed] = useState(false);
        const [image, setImage] = useState("");
       
        /* This react hook allows smooth redirections */
        let navigate = useNavigate();



        /* functions that are called and change the useStates for each variable depending on which button is clicked */
        const toggleButton = () => {
            setButtonPressed(true);
            setImage("/placeholder.gif")
            setTimeout(() => {
                navigate("/");
            }, 3500);
            }
         
        
        
        
        
        


       
        
    return(
        <>
           <LandingPageContainer>
           { buttonPressed ?
                    <img src={setImage} className="LandingImage" src={image} />
                    

            : 
            
            <div>
              
              <img src="/Landing2.png" onClick={toggleButton} className="PrePress" /> 
            </div>
            }
                
                
           </LandingPageContainer>
        
        </>
        
        )
}

export default Landing;
