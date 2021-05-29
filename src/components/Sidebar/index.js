import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SideBtnWrap, Sidebarlink, SidebarRoute, SidebarWrapper, SidebarMenu
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Sidebarlink to="about" onClick={toggle}>
                        About
                    </Sidebarlink>
                </SidebarMenu>
                <SidebarMenu>
                    <Sidebarlink to="discover" onClick={toggle}>
                        Discover
                    </Sidebarlink>
                </SidebarMenu>
                <SidebarMenu>
                    <Sidebarlink to="services" onClick={toggle}>
                        Services
                    </Sidebarlink>
                </SidebarMenu>
                <SidebarMenu>
                    <Sidebarlink to="signup" onClick={toggle}>
                        Sign Up
                    </Sidebarlink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle}>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
