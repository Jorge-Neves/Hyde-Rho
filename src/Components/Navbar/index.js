import React from 'react';
import {FaBars, FaToggleOff} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Logo
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='landing'>Landing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='temperature'>Temperature</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='eco'>Eco</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='shower'>Shower Time</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
