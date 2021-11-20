import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FlowTimeThree from "./Details/FlowTimeThree";
import ConsumptionThree from "./Details/ConsumptionThreeDays";
import PowerConsumptionThree from "./Details/PowerConsumptionThree";

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

        /* useStates for conditional rendering with the slider bellow the buttons */
        /* This will allow each slider value to change the time period for the graphs */
        // const [threeDays, setThreeDays] = useState(true);
        // const [week, setWeek] = useState(false);
        // const [month, setMonth] = useState(false);


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

         /* functions that are called and change the useStates for each time span depending on which button is clicked */
        //  const togglePower = () => {
        //     setThreeDays(true);
        //     setWeek(false);
        //     setMonth(false);
         
        
        // }
        
        // const toggleFlowTime = () => {
        //   setThreeDays(false);
        //   setWeek(true);
        //   setMonth(false);
    
        // }
        
        
        // const toggleConsumption = () => {
        //   setThreeDays(false);
        //   setWeek(false);
        //   setMonth(true);
          
        // }


        // function toggleVariables(variable) {
        //     if(variable === powerConsumption) {
        //         setPowerConsumptionVar(true);
        //         setFlowTimeVar(false);
        //         setConsumptionVar(false);
        //     }

        //     if(variable === flowTime) {
        //         setPowerConsumptionVar(false);
        //         setFlowTimeVar(true);
        //         setConsumptionVar(false);
        //     }

        //     if(variable === consumption) {
        //         setPowerConsumptionVar(false);
        //         setFlowTimeVar(false);
        //         setConsumptionVar(true);
                
        //     }
        // }
        

       
        
    return(
        <>
            <h1>In-depth Consumption details</h1>

            <button onClick={togglePower}>Power Consumption</button>
            <button onClick={toggleFlowTime}>Flow Time</button>
            <button onClick={toggleConsumption}>Water Consumption</button>




            {/* Power Consumption graphs conditional rendering */}  
            
            { powerConsumption ?
                    <div>
                        <h1>Power Consumption past 3 days</h1>
                        <PowerConsumptionThree />
                    </div>
                    

            : "" }

            {/* { powerConsumption && week ?
                    <div>
                        <h1>Power Consumption past week</h1>
                    </div>


            : "" }

            { powerConsumption && month ?
                    <div>
                        <h1>Power Consumption past month</h1>
                    </div>


            : "" } */}

             {/* Flow Time graphs conditional rendering */}  

            { flowTime  ?
                    <div>
                        <h1>Flow Time past 3 days</h1>
                        <FlowTimeThree />
                    </div>


            : "" }

            {/* { flowTime && week ?
                    <div>
                        <h1>Flow Time past week</h1>
                    </div>


            : "" }

            { flowTime && month ?
                    <div>
                        <h1>Flow Time past month</h1>
                    </div>


            : "" } */}

             {/* Water Consumption graphs conditional rendering */}  

            { consumption ?
                    <div>
                        <h1>Consumption past 3 days</h1>
                        <ConsumptionThree />
                    </div>


            : "" }

            {/* { consumption && week ?
                    <div>
                        <h1>Consumption past week</h1>
                    </div>


            : "" }

            { consumption && month ?
                    <div>
                        <h1>Consumption past month</h1>
                    </div>


            : "" } */}

            
        </>
        
        )
}

export default Details;
