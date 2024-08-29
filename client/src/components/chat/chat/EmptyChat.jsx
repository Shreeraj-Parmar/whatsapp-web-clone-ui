import {
  Dialog,
  Box,
  Typography,
  List,
  ListItem,
  styled,
  Divider,
} from "@mui/material";
import BlurOnIcon from "@mui/icons-material/BlurOn";

const Container = styled(Box)`
  height: 100vh;
  text-align: center;
  padding: 10px;
`;

const ContainerImage = styled(BlurOnIcon)`
  widht: 200px;
  height: 200px;
`;

const EmptyChat = () => {
  return (
    <Container>
      <ContainerImage>
        <BlurOnIcon fontSize="large" />
      </ContainerImage>
      <Box>
        <Typography>Please Select the Message</Typography>
        <Typography>
          you need to first select the message than you can see the messages
        </Typography>
      </Box>
      <br />
      <Divider />
    </Container>
  );
};

export default EmptyChat;
