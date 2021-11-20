import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to='details' onClick={toggle}>
                    Details
                </SidebarLink>
                <SidebarLink to='about' onClick={toggle}>
                    About
                </SidebarLink>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
