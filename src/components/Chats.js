import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

const Chats = () => {
  const history = useHistory();

  const handlelogout = async () => {
    await auth.signOut();

    history.push("/");
  };

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">weChatr</div>
        <div onClick={handlelogout} className="logout-tab">
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="e04f2bfd-e1c7-437c-845f-f75bf15702f2"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
