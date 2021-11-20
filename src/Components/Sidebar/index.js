import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarLink to='about'>
                    About
                </SidebarLink>
                <SidebarLink to='details'>
                    Details
                </SidebarLink>
                <SidebarLink to='about'>
                    About
                </SidebarLink>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
