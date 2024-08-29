import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { Search, MoreVert } from "@mui/icons-material";
import { useContext } from "react";
import { AccoountContext } from "../../../context/AccountProvider";

const Header = styled(Box)`
  height: 40px;
  background-color: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;
const Image = styled("img")({
  width: "35px",
  height: "35px",
  border: "1px solid black",
  borderRadius: "100%",
  marginLeft: "7px",
  cursor: "pointer",
});

const Name = styled(Typography)`
  font-size: 15px;
  margin-left: 12px;
`;
const Status = styled(Typography)`
  font-size: 12px;
  margin-left: 12px;
  color: rgb(0, 0, 0, 0.6);
`;

const RightIcons = styled(Box)`
  margin-left: auto;
  & > svg {
    padding: 8px;
    font-size: 28px;
  }
`;

const ChatHeader = ({ person }) => {
  const { activeUsers } = useContext(AccoountContext);
  return (
    <Header>
      <Image src={person.picture} alt="dp" />
      <Box>
        <Name>{person.name}</Name>
        <Status>
          {activeUsers?.find((user) => user.sub === person.sub)
            ? "Online"
            : "Offline"}
        </Status>
      </Box>
      <RightIcons>
        <Search />
        <MoreVert />
      </RightIcons>
    </Header>
  );
};

export default ChatHeader;
