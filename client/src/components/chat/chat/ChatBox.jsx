import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccoountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";

// components :
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import Chats from "./Chats";

const ChatBox = () => {
  const {
    person,
    account,
    conversation,
    value,
    setValue,
    messages,
    setMessages,
    file,
    setFile,
  } = useContext(AccoountContext);

  const [newMessageFlag, setNewMessageFleg] = useState(false);

  useEffect(() => {
    const getMessagesDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    getMessagesDetails();
  }, [person.sub, conversation, newMessageFlag, messages]);

  const sendText = async (e) => {
    if (e.key === "Enter") {
      let message = {
        senderId: account.sub,
        recieverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };
      await newMessage(message);
      setValue("");
      setNewMessageFleg((prev) => !prev);
    }
  };
  return (
    <>
      <Box>
        <ChatHeader person={person} />
      </Box>
      <Box>
        <Chats person={person} messages={messages} />
      </Box>

      <Box>
        <ChatFooter
          sendText={sendText}
          setValue={setValue}
          value={value}
          file={file}
          setFile={setFile}
        />
      </Box>
    </>
  );
};

export default ChatBox;
