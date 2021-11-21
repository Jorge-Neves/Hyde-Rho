import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FlowTimeThree from "./FlowTimeThree";
import ConsumptionThree from "./ConsumptionThreeDays";
import PowerConsumptionThree from "./PowerConsumptionThree";
import FlowTimeWeek from "./FlowTimeWeek";
import FlowTimeMonth from "./FlowTimeThree";
import PowerConsumptionWeek from "./PowerConsumptionThree";
import PowerConsumptionMonth from "./PowerConsumptionMonth";
import ConsumptionWeek from "./ConsumptionWeek";
import ConsumptionMonth from "./ConsumptionMonth";
import { DetailsLandingContainer, DetailsImg, DetailsH1 } from "./DetailsElements";
import Fade from 'react-reveal/Fade';



function Details(){

        /* useStates for conditional rendering with the buttons at the very top */
        /* This will allow each button to render its respective variable */

        const [powerConsumption, setPowerConsumptionVar] = useState(true);
        const [flowTime, setFlowTimeVar] = useState(false);
        const [consumption, setConsumptionVar] = useState(false);



        /* functions that are called and change the useStates for each variable depending on which button is clicked */
        const togglePower = () => {
            setPowerConsumptionVar(true);
            setFlowTimeVar(false);
            setConsumptionVar(false);
         
        
        }
        
        const toggleFlowTime = () => {
          setPowerConsumptionVar(false);
          setFlowTimeVar(true);
          setConsumptionVar(false);
    
        }
        
        
        const toggleConsumption = () => {
          setPowerConsumptionVar(false);
          setFlowTimeVar(false);
          setConsumptionVar(true);
          
        }

        

       
        
    return(
        <>
            <DetailsLandingContainer>
                    <Fade Bottom>
                        <DetailsH1>
                            <h1>Your Data</h1>
                        </DetailsH1>
                    </Fade>
                <DetailsImg>
                    <img src="/DetailsBG.svg" alt="A cartoon vector man on a production line" className="DetailsImage" />
                </DetailsImg>

                {/* These functions show different variables depending on which is clicked */}

                {/* <button onClick={togglePower}>Power Consumption</button>
                <button onClick={toggleFlowTime}>Flow Time</button>
                <button onClick={toggleConsumption}>Water Consumption</button> */}

            </DetailsLandingContainer>

        </>
        
        )
}

export default Details;
