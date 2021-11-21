import React from "react";
import styled from "styled-components";
import { AboutLandingContainer, AboutImg, AboutH1, AboutP, AboutCard, AboutContent } from "./AboutElements"



function About(){
    return(
        <AboutLandingContainer id="about">
            <AboutContent>
            <AboutImg>
                <img src="/AboutBG.svg" alt="Cartoon vector man sleeping" className="AboutImage" />
            </AboutImg>



            <AboutH1>Meet the Team</AboutH1>

            <AboutCard>
            <AboutP>Ana Venâncio -UX / UI Designer - <a href="https://www.linkedin.com/in/anavrvenancio/" target="_blank" className="contacts">LinkedIn</a></AboutP>
            
            </AboutCard>

            <AboutCard>
            <AboutP>João Prates - Web Developer - <a href="https://www.linkedin.com/in/joao-prates-az/" target="_blank" className="contacts">LinkedIn</a> </AboutP>
            
            </AboutCard>

            <AboutCard>
            <AboutP>Paulo Santos - Web Developer - <a href="https://www.linkedin.com/in/paulo-j-santos/" target="_blank" className="contacts">LinkedIn</a></AboutP>
            <AboutP></AboutP>
            </AboutCard>
            
            <AboutCard>
            <AboutP>Said Anis - Web Developer - <a href="https://www.linkedin.com/in/said-anis-khouider-045530226/" target="_blank" className="contacts">LinkedIn</a></AboutP>
            </AboutCard>
            </AboutContent>
        </AboutLandingContainer>
    )
}

export default About;