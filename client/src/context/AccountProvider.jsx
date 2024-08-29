import { createContext, useState, useEffect, useRef } from "react";

import { io } from "socket.io-client";

export const AccoountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [person, setPerson] = useState({});
  const [conversation, setConversation] = useState({});
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [file, setFile] = useState();
  const [activeUsers, setActiveUsers] = useState([]);

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);

  return (
    <AccoountContext.Provider
      value={{
        account,
        setAccount,
        activeUsers,
        setActiveUsers,
        person,
        setPerson,
        socket,
        conversation,
        setConversation,
        value,
        setValue,
        messages,
        setMessages,
      }}
    >
      {children}
    </AccoountContext.Provider>
  );
};

export default AccountProvider;
