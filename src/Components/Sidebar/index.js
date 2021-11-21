import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink } from './SidebarElements';
import { NavLink } from "react-router-dom";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                {/* <SidebarLink to='/' smooth={true} duration={500} onClick={toggle}>
                    Home
                </SidebarLink>
                <SidebarLink to='/Details' onClick={toggle}>
                    Details
                </SidebarLink>
                <SidebarLink to='/about' onClick={toggle}>
                    About
                </SidebarLink> */}
                <NavLink to="/" className="NavLinks">
                            <h1 >Home</h1>
                        </NavLink>
                        <NavLink to="/details" className="NavLinks">
                            <h1 className="NavLinks">Details</h1>
                        </NavLink>
                <NavLink to="/about" className="NavLinks">
                            <h1 className="NavLinks">About</h1>
                        </NavLink>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
