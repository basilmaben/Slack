import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import React from 'react'
import styled from "styled-components"
import CreateIcon from '@material-ui/icons/Create'

function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>New Chat</h2>
                    <h3>
                    <FiberManualRecordIcon/>
                    Basil Maben
                    </h3>
                </SidebarInfo>
                <CreateIcon/>
            </SidebarHeader>
        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
color: white;
background-color: var(--slackcolor);
flex: 0.3;
border-top : 1px solid #49274b;
max-width: 260px;
margin-top: 60px;
`;

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;
> .MuiSvgIcon-root{
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
}
`;

const SidebarInfo = styled.div`
flex: 1;

> h2{
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}
`;
