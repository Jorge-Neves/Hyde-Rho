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




function FlowTimeWeek(){

   const data = [{
        date: '2020-12-29',
        powerc: 9,
      },
      {
        date: '2020-12-30',
        powerc: 5,
      },
      {
        date: '2020-12-31',
        powerc: 6,
      },
    ];


        
    return(
        <>
            <h1>Past Week Flow Time Graph</h1>

            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis dataKey="powerc" />
                    <Line type="monotone" dataKey="powerc" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Tooltip />
                    <CartesianGrid/>
                </LineChart>
            </ResponsiveContainer>

            
        </>
        
        )
}

export default FlowTimeWeek;