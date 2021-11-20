import React, { useState, useEffect } from "react";
import styled from "styled-components";


function Landing(){

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
        
        
        }


       
        
    return(
        <>
            <h1>Landing Page</h1>

        </>
        
        )
}

export default Details;
