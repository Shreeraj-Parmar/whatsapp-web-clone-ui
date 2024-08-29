import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AccoountContext } from "../../context/AccountProvider";
import { useContext } from "react";
import { addUser } from "../../service/api.js";
import { BorderAll } from "@mui/icons-material";

// <Typograpy> === <p>
// <Box> === <div>
// <List> === <ul & ol>
// <ListItem> === <li>
// for style MUI Dialog We use PaperProps wich is as style attribut for spacial Dialog tag done by MUI.
const dialogStyle = {
  // in React we use camleCase Styling remember it.
  height: "95%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Component = styled(Box)`
  height: 100vh;

  text-align: center;
`;

const Container = styled(Box)`
  margin: 20px;
`;

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 400;
  font-family: inherit;
  margin-bottom: 25px;
`;
const TitleSecond = styled(Typography)`
  font-size: 18px;
  color: #525;
  font-weight: 400;
  font-family: inherit;
  margin-bottom: 50px;
`;

const StyledLi = styled(Box)`
  text-align: center;
`;
const LoginDialogIcon = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginDialog = () => {
  const { setAccount } = useContext(AccoountContext);

  const OnLoginSuccess = async (res) => {
    const decode = jwtDecode(res.credential);
    setAccount(decode);
    await addUser(decode);
  };
  const OnLoginError = (res) => {
    console.log(res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
      <Component>
        <Container>
          <Title>Welcome To Weeby </Title>
          <TitleSecond>
            Please Login/SignUp with your Google-mail Account
          </TitleSecond>
        </Container>
        <LoginDialogIcon>
          <GoogleLogin onSuccess={OnLoginSuccess} onError={OnLoginError} />
        </LoginDialogIcon>
        <StyledLi>
          <Typography
            style={{
              marginTop: "400px",
              position: "fixed",
              marginLeft: "130px",
            }}
          >
            Term & Conditions Apply
          </Typography>
        </StyledLi>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
