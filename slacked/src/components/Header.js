import React from "react";
import styled from "styled-components";
import {Avatar} from "@material-ui/core";

function Header() {
  return (
    <HeaderCointainer>
      {/* Header Left */}
      <HeaderLeft>
        <HeaderAvatar    
        // 
        />
        
      </HeaderLeft>
      {/* Header Search */}
      {/* Header */}
    </HeaderCointainer>
  );
}

export default Header;

const HeaderCointainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``