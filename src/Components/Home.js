import React from "react";
import styled from "styled-components";

const DeviceViewContainer = styled.section`
	display: flex !important;
	flex-direction: column;

    @media screen and (max-width: 780px) {
    display: flex !important;
	flex-direction: row;
	
		
	}
  }

    

    `;

const LandingContainer = styled.section`
    background-color: #8db6f7;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;

    @media screen and (max-width: 780px) {
        widtht: 100vw;
	
		
	}
`;


const TemperatureSection = styled.section`
    background-color: #c5a4db;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    @media screen and (max-width: 780px) {
        widtht: 100vw;
	
		
	}
`;

const EcoTipsContainer = styled.section`
    background-color: #f5bacc;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    @media screen and (max-width: 780px) {
        widtht: 100vw;
	
		
	}
`;

const GameficationSection = styled.section`
    background-color: #a8d6f7;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    @media screen and (max-width: 780px) {
        widtht: 100vw;
	
		
	}
`;

const UserShowerTimeContainer = styled.section`
    background-color: #f5bacf;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;

    @media screen and (max-width: 780px) {
        widtht: 100vw;
	
		
	}
`;

function Home(){
    return(
        <> 
            <DeviceViewContainer>
                <h1>Home Page</h1>
                <LandingContainer>
                    <h1>Welcome user</h1>
                </LandingContainer>
                <TemperatureSection>
                    <h1>Your perfect shower temperature is ###</h1>
                </TemperatureSection>
                <EcoTipsContainer>
                    <h1>Want to know more about how to help the enviroment?</h1>
                </EcoTipsContainer>
                <GameficationSection>
                    <h1>Help your flower grow</h1>
                </GameficationSection>
                <UserShowerTimeContainer>
                    <h1>Your preferred shower time is from ### to ###</h1>
                </UserShowerTimeContainer>
            </DeviceViewContainer>
        </>

    )
}

export default Home;