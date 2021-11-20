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
import { DetailsLandingContainer, GraphContainer } from "./DetailsElements";




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
            <h1>In-depth Consumption details</h1>

            {/* These functions show different variables depending on which is clicked */}

            <button onClick={togglePower}>Power Consumption</button>
            <button onClick={toggleFlowTime}>Flow Time</button>
            <button onClick={toggleConsumption}>Water Consumption</button>

            </DetailsLandingContainer>

            <GraphContainer>
            {/* Power Consumption graphs conditional rendering */}  
            
            { powerConsumption ?
                    <div>
                        <h1>Power Consumption</h1>
                        <PowerConsumptionThree />
                        <PowerConsumptionWeek />
                        <PowerConsumptionMonth />
                    </div>
                    

            : "" }


             {/* Flow Time graphs conditional rendering */}  

            { flowTime  ?
                    <div>
                        <h1>Flow Time </h1>
                        <FlowTimeThree />
                        <FlowTimeWeek />
                        <FlowTimeMonth />
                    </div>


            : "" }

   

             {/* Water Consumption graphs conditional rendering */}  

            { consumption ?
                    <div>
                        <h1>Water Consumption</h1>
                        <ConsumptionThree />
                        <ConsumptionWeek />
                        <ConsumptionMonth />
                        
                    </div>


            : "" }

            </GraphContainer>

            
        </>
        
        )
}

export default Details;
