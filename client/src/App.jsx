import { GoogleOAuthProvider } from "@react-oauth/google";

// components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";
import DrawerProvider from "./context/DrawerProvider";

function App() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <AccountProvider>
          <DrawerProvider>
            <Messenger />
          </DrawerProvider>
        </AccountProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
