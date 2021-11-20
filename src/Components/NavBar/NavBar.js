import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
    position: absolute;
    display: flex !important;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    a {
        color: #485466;
        text-decoration: none;
    }

    ul {
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
        
        li {
            padding: 18px 10px;
        }
    }
    
`;

function NavBar() {

        return(
            <Nav>
                <NavLink to="/landing" >
                    Landing
                </NavLink>
                <NavLink to="/" >
                    Home
                </NavLink>
                <NavLink to="/details" >
                    Details
                </NavLink>
                <NavLink to="/about" >
                    About Us
                </NavLink>
            </Nav>

        );

}






export default NavBar;