import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { useContext } from "react";
import { AccoountContext } from "../../context/AccountProvider";

const ProfileImage = styled("img")`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
const Text = styled(Typography)``;
const ProfileWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`;
const Wrapper = styled(Box)`
  background: #fff;
  padding: 20px;

  border-radius: 2px;
`;

const WrapperTypo = styled(Typography)`
  color: #009698;
`;

const TextHas = styled(Box)`
  padding: 20px;
  font-size: 10px;
`;

const Profile = () => {
  const { account } = useContext(AccoountContext);
  return (
    <>
      <ProfileWrapper>
        <ProfileImage src={account.picture} alt="dp" />
      </ProfileWrapper>
      <Wrapper>
        <WrapperTypo>Your Name</WrapperTypo>
        <Typography>{account.name}</Typography>
      </Wrapper>
      <TextHas>
        <Typography>Email : {account.email}</Typography>
      </TextHas>
      <Wrapper>
        <WrapperTypo>About Us</WrapperTypo>
        <Typography>Eat Code Sleep Reapet</Typography>
      </Wrapper>
    </>
  );
};

export default Profile;
