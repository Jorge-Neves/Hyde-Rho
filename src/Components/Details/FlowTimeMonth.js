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



function FlowTimeMonth(){

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
  {
    date: 'Day-8',
    powerc: 0.4,
  },
  {
    date: 'Day-9',
    powerc: 2.3,
  },
  {
    date: 'Day-10',
    powerc: 1.5,
  },
  {
    date: 'Day-11',
    powerc: 1.0,
  },
  {
    date: 'Day-12',
    powerc: 0.6,
  },
  {
    date: 'Day-13',
    powerc: 1.4,
  },
  {
    date: 'Day-14',
    powerc: 0.8,
  },
  {
    date: 'Day-15',
    powerc: 1.0,
  },
  {
    date: 'Day-16',
    powerc: 2.3,
  },
  {
    date: 'Day-17',
    powerc: 1.5,
  },
  {
    date: 'Day-18',
    powerc: 0.3,
  },
  {
    date: 'Day-19',
    powerc: 0.9,
  },
  {
    date: 'Day-20',
    powerc: 1.4,
  },
  {
    date: 'Day-21',
    powerc: 0.8,
  },
  {
    date: 'Day-22',
    powerc: 0.4,
  },
  {
    date: 'Day-23',
    powerc: 0.8,
  },
  {
    date: 'Day-24',
    powerc: 1.5,
  },
  {
    date: 'Day-25',
    powerc: 1.0,
  },
  {
    date: 'Day-26',
    powerc: 0.9,
  },
  {
    date: 'Day-27',
    powerc: 1.4,
  },
  {
    date: 'Day-28',
    powerc: 0.7,
  },
  {
    date: 'Day-29',
    powerc: 1.4,
  },
  {
    date: 'Day-30',
    powerc: 0.8,
  },
];


        
    return(
        <>
        <GraphContainer>
            <h1>Past Month Flow Time Graph</h1>

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

export default FlowTimeMonth;