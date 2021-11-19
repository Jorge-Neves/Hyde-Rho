import React, { useState, useEffect } from "react";
import styled from "styled-components";


function Details(){

        /* useStates for conditional rendering with the buttons at the very top*/
        /*This will allow each button to render its respective variable*/

        const [powerConsumptionVar, setPowerConsumptionVar] = useState(true);
        const [flowTimeVar, setFlowTimeVar] = useState(false);
        const [consumptionVar, setConsumptionVar] = useState(false);


        /* functions that are called and change the useStates depending on which button is clicked */
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

            <button onClick={togglePower}>Weight</button>
            <button onClick={toggleFlowTime}>Temperature</button>
            <button onClick={toggleConsumption}>Pulse Rate</button>
            
        </>
        
        )
}

export default Details;
