import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { useContext } from "react";
import { AccoountContext } from "../../../context/AccountProvider";
import { formateDate } from "../../../utils/common-utils.js";

//style:

const OwnMessage = styled(Box)`
  background: #dcf8c6;
  max-width: 60%;
  margin-left: auto;
  padding: 5px 5px 5px 16px;

  margin-top: 3px;
  margin-right: 5px;
  margin-bottom: 5px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const OtherMessage = styled(Box)`
  background: #ffffff;
  max-width: 60%;
  margin-top: 3px;
  margin-left: 5px;
  margin-bottom: 5px;
  padding: 5px 5px 5px 16px;
  width: fit-content;
  display: flex;
  border-radius: 10px;
  word-break: break-word;
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 0 25px 0 0;
`;

const Time = styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  margin-top: auto;
  word-break: keep-all;
  padding: 0 0 0 2px;
`;

const Message = ({ message }) => {
  const { account, person } = useContext(AccoountContext);
  return (
    <>
      {account.sub === message.senderId ? (
        <OwnMessage>
          <Text>{message.text}</Text>
          <Time>{formateDate(message.createdAt)}</Time>
        </OwnMessage>
      ) : (
        <OtherMessage>
          <Text>{message.text}</Text>
          <Time>{formateDate(message.createdAt)}</Time>
        </OtherMessage>
      )}
    </>
  );
};

export default Message;
