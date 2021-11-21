import React, { useState, useEffect } from "react";
import styled from "styled-components";
import{
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Line
} from 'recharts';
import { GraphContainer } from "./DetailsElements";



function ConsumptionThree(){


    /* Values for the 3 days Graph */

   const data = [{
        date: 'Day 1',
        WaterConsumed: 11.6,
      },
      {
        date: 'Day 2',
        WaterConsumed: 56.7,
      },
      {
        date: 'Day 3',
        WaterConsumed: 36.1,
      },
    ];

 


        
    return(
        <>
            
            <GraphContainer>

            <h1>Past 3 Days water Consumption Graphs</h1>

            <ResponsiveContainer width={500} height="50%">
    <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis dataKey="powerc" />
        <Line type="monotone" dataKey="powerc" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Tooltip />
        <CartesianGrid/>
    </LineChart>
</ResponsiveContainer>
</GraphContainer>
        </>
        
        )
}

export default ConsumptionThree;