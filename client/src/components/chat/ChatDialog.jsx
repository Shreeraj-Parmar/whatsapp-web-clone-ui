import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { useContext } from "react";
import { AccoountContext } from "../../context/AccountProvider";

//components:

import Menu from "./menu/Menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";

const dialogStyle = {
  // in React we use camleCase Styling remember it.
  height: "95%",

  margin: "auto",
  width: "98%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
  borderRadius: 0,
};

const Components = styled(Box)`
  display: flex;
`;

const LeftCompo = styled(Box)`
  width: 400px;
`;

const RightCompo = styled(Box)`
  width: 75%;
  min-width: 300px;
  border-left: 2px solid #dcdcdc;
`;

function Chatdialog() {
  const { person } = useContext(AccoountContext);

  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Components>
        <LeftCompo>
          <Menu />
        </LeftCompo>
        <RightCompo>
          {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
        </RightCompo>
      </Components>
    </Dialog>
  );
}

export default Chatdialog;
