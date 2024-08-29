import React, { useState, useEffect, useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import AttachmentOutlinedIcon from "@mui/icons-material/AttachmentOutlined";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import InputBase from "@mui/material/InputBase";

import { uploadFile } from "../../../service/api";

import { AccoountContext } from "../../../context/AccountProvider";
//style:

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  display: flex;
  width: 100%;
  align-items: center;

  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #f5ce93;
    ${"" /* padding: 0 10px; */}
  }
`;

const SearchBox = styled(Box)`
  ${"" /* border: 1px solid black; */}
  border-radius: 10px;
  width: calc(94% - 100px);
  background-color: #ffffff;
`;

const Input = styled(InputBase)`
  width: 100%;
  ${"" /* border: 1px solid red; */}
  padding: 0 16px;
`;

const ChatFooter = ({ setValue, sendText, value }) => {
  const { account, person, conversation } = useContext(AccoountContext);

  return (
    <Container>
      <EmojiEmotionsOutlinedIcon
        style={{ cursor: "pointer", color: "black" }}
      />
      {/* <label htmlFor="fileInput">
        <AttachmentOutlinedIcon
          style={{ cursor: "pointer", transform: "rotate(-40deg)" }}
        />
      </label>
      <input
        type="file"
        name="file"
        id="fileInput"
        style={{ display: "none" }}
      /> */}
      <SearchBox>
        <Input
          placeholder="type a messaage"
          onKeyDown={(e) => sendText(e)}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </SearchBox>
      <MicOutlinedIcon style={{ cursor: "pointer", color: "black" }} />
    </Container>
  );
};

export default ChatFooter;
