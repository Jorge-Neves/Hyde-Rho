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


function PowerConsumptionWeek(){

   const data = [{
        date: '2020-12-29',
        powerc: 3,
      },
      {
        date: '2020-12-30',
        powerc: 6,
      },
      {
        date: '2020-12-31',
        powerc: 4,
      },
    ];


        
    return(
        <>
        <GraphContainer>
            <h1> Past Week Power Consumption Graph</h1>

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

export default PowerConsumptionWeek;
