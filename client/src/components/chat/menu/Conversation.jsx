import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { useContext } from "react";
import { AccoountContext } from "../../../context/AccountProvider";
import { setConversation } from "../../../service/api.js";

const Component = styled(Box)`
  display: flex;
  height: 43px;
  padding: 13px 0;
`;
const Image = styled("img")({
  cursor: "pointer",
  width: 50,
  height: 50,
  borderRadius: "50%",
  padding: "0 14px",
});

const Conversation = ({ user }) => {
  const { setPerson, account } = useContext(AccoountContext);
  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub });
  };

  return (
    <Component onClick={() => getUser()}>
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>
      <Box>{user.name}</Box>
    </Component>
  );
};

export default Conversation;
