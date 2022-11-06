import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import "./App.css";

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />

  return (
    <ChatEngine
      height="100vh"
      projectID = "292a738e-6944-448a-a05b-f80376345c9a"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
    />
  );
};
export default App;
