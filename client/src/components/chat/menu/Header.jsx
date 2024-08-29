import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";

import {
  Chat as MessageIcon,
  DataUsageOutlined,
  ArrowBack,
} from "@mui/icons-material";
import { Drawer } from "@mui/material";
// components:
import Profile from "../../Drawer/Profile";
import MoreVert from "./MoreVert";
import { useContext, useState } from "react";
import { AccoountContext } from "../../../context/AccountProvider";
// import zIndex from "@mui/material/styles/zIndex";

const Component = styled(Box)`
  height: 40px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const IconStyle = styled(Box)`
  & > * {
    margin-left: 5px;
    padding: 8px;
  }
`;

const Image = styled("img")({
  width: "35px",
  height: "35px",
  border: "1px solid black",
  borderRadius: "100%",
  marginLeft: "7px",
  cursor: "pointer",
});

const HeaderOfDrawer = styled(Box)`
  background: #008069;
  height: 107px;
  color: #ffffff;
  display: flex;
  & > svg {
    cursor: pointer;
  }
  ,
  & > p,
  & > svg {
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
  }
`;
const ProfileDrawer = styled(Box)`
  background: #dcdcdc;
  height: 100%;
`;
const drawerStyle = {
  left: 20,
  top: 17,
  width: "30%",
  height: "95%",
};
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { account } = useContext(AccoountContext);

  const toggleDrawer = () => {
    console.log("clicked");
    setOpenDrawer(true);
  };

  return (
    <>
      <Component>
        <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
        <IconStyle>
          <DataUsageOutlined
            sx={{ fontSize: 25 }}
            style={{ cursor: "pointer" }}
          />
          <MessageIcon sx={{ fontSize: 25 }} style={{ cursor: "pointer" }} />
          <MoreVert setOpenDrawer={setOpenDrawer} />
        </IconStyle>
      </Component>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: drawerStyle }}
        style={{ zIndex: 1500 }}
      >
        <HeaderOfDrawer>
          <ArrowBack onClick={() => setOpenDrawer(false)} />
          <Typography>Profile</Typography>
        </HeaderOfDrawer>
        <ProfileDrawer>
          <Profile />
        </ProfileDrawer>
      </Drawer>
    </>
  );
};

export default Header;
