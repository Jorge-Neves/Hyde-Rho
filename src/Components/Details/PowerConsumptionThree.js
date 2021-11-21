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
        date: 'Day-1',
        powerc: 0.4,
      },
      {
        date: 'Day-2',
        powerc: 2.3,
      },
      {
        date: 'Day-3',
        powerc: 1.5,
      },
      {
        date: 'Day-4',
        powerc: 1.0,
      },
      {
        date: 'Day-5',
        powerc: 0.9,
      },
      {
        date: 'Day-6',
        powerc: 1.4,
      },
      {
        date: 'Day-7',
        powerc: 0.8,
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
