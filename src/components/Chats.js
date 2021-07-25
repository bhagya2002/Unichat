import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  console.log(user);

  const handlelogout = async () => {
    await auth.signOut();

    history.push("/");
  };

  useEffect(() => {
    if (!user) {
      history.push("/");

      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "e04f2bfd-e1c7-437c-845f-f75bf15702f2",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
      });
  }, [user, history]);

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
