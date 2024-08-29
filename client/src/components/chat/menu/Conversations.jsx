import { useEffect, useState, useContext } from "react";
import {
  Dialog,
  Divider,
  Box,
  Typography,
  List,
  ListItem,
  styled,
} from "@mui/material";

import { getUsers } from "../../../service/api.js";
import { AccoountContext } from "../../../context/AccountProvider.jsx";

//components :

import Conversation from "./Conversation.jsx";

const Component = styled(Box)`
  height: 84vh;
  overflow: overlay;
`;

const Devider = styled(Divider)`
  margin-left: 70px;
`;

const Conversations = ({ text }) => {
  const [users, setUsers] = useState([]);

  const { account, socket, setActiveUsers } = useContext(AccoountContext);

  useEffect(() => {
    const fetchData = async () => {
      let res = await getUsers();
      let filterData = res.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filterData);
    };
    fetchData();
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);

  return (
    <Component>
      {users.map(
        (user, index) =>
          user.sub !== account.sub && (
            <>
              <Conversation key={index} user={user} />
              <Devider />
            </>
          )
      )}
    </Component>
  );
};

export default Conversations;
