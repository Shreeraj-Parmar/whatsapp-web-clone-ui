import { AppBar, Toolbar, styled, Box } from "@mui/material";

import { AccoountContext } from "../context/AccountProvider";
import { useContext } from "react";

// components
import LoginDialog from "./accoount/LoginDialog";
import ChatDialog from "./chat/ChatDialog";

// we override style of MUI components with uses of : "   styled(<-Component name->)`  <-your css code-> `  "

const Header = styled(AppBar)`
  height: 220px;
  background-color: #00bfa5;
  box-shadow: none;
`;

// Box is component in MUI : it's like MUI <div> tag. we replace here with : "Component"

const Component = styled(Box)`
  width: 100vw;
  max-width: 100vw;
  height: 100vh;
  background-color: #dcdcdc;
`;

function Messenger() {
  const { account } = useContext(AccoountContext);

  return (
    <Component>
      {/* we place Appbar as Header with ovveride styling */}

      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>

          <LoginDialog />
        </>
      )}
    </Component>
  );
}

export default Messenger;
