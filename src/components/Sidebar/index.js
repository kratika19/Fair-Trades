import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SideBtnWrap,Sidebarlink,SidebarRoute,SidebarWrapper,SidebarMenu
} from './SidebarElements';

const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Sidebarlink to = "about">
                        About
                    </Sidebarlink>
                </SidebarMenu>
                <SidebarMenu>
                    <Sidebarlink to = "discover">
                        Discover
                    </Sidebarlink>
                </SidebarMenu>
                <SidebarMenu>
                    <Sidebarlink to = "services">
                        Services
                    </Sidebarlink>
                </SidebarMenu>
                <SidebarMenu>
                    <Sidebarlink to = "signup">
                        Sign Up
                    </Sidebarlink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = "/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
