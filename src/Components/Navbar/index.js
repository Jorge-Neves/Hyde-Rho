import React from 'react';
import {FaBars, FaToggleOff} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        Hyde/Rhô
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    {/* <NavMenu>
                        <NavItem>
                            <NavLinks to='hero' smooth={true} duration={500}>Landing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='temperature' smooth={true} duration={500}>Temperature</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='eco' smooth={true} duration={500}>Eco</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='shower'>Shower Time</NavLinks>
                        </NavItem>
                    </NavMenu> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;
