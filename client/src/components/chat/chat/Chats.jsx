import React, { useEffect, useContext, useRef } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { AccoountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";

// componrnts :
import Message from "./Message";

const Wrapper = styled(Box)`
  // background-image: url(${"https://cdn.pixabay.com/photo/2016/06/02/02/38/mesh-1430108_960_720.png"});
  background-color: #cdcdcd;

  // background-cover: cover;
`;

const Component = styled(Box)`
  height: 80vh;
  overflow-y: scroll;
`;

const MessageStyle = styled(Box)`
  padding: 2px 70px;
`;

const Chats = ({ messages }) => {
  const { person, account, setConversation } = useContext(AccoountContext);
  const scrollRef = useRef();

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };
    getConversationDetails();
  }, [person.sub]);

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ transition: "smooth" });
  // }, [messages]);

  return (
    <Wrapper>
      <Component>
        {messages &&
          messages.map((message, ind) => (
            <MessageStyle key={message.ind} ref={scrollRef}>
              <Message message={message} />
            </MessageStyle>
          ))}
      </Component>
    </Wrapper>
  );
};

export default Chats;
