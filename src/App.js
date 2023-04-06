import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="9dd3ed63-3d1a-4308-afb1-bde0b74eba16"
      userName="aadishmn"
      userSecret="Password@123"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
