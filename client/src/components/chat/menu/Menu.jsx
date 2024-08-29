import { React, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";
import { Divider, styled } from "@mui/material";

const Devider = styled(Divider)`
  margin-left: 70px;
`;

const Menu = () => {
  const [text, setText] = useState("");
  return (
    <>
      <Header />
      <Search setText={setText} />
      <Devider />
      <Conversations text={text} />
    </>
  );
};

export default Menu;
