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



const DetailsLandingContainer = styled.section`
    background-color: #a8d6f7;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;


const GraphContainer = styled.section`
    background-color: #f5bacc;
	height: 100vh;
	background-size: cover;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

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
            <h1>In-depth Consumption details</h1>

            {/* These functions show different variables depending on which is clicked */}

            <button onClick={togglePower}>Power Consumption</button>
            <button onClick={toggleFlowTime}>Flow Time</button>
            <button onClick={toggleConsumption}>Water Consumption</button>




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

         

            
        </>
        
        )
}

export default Details;
