import React, { useState } from "react";
import config from "./Config.js";
import MessageParser from "./MessageParser.js";
import ActionProvider from "./ActionProvider.js";
import Chatbot from "react-chatbot-kit";
import { IoIosArrowDown } from "react-icons/io";
import chatbotImg from "../../Assets/chatbot.png"
import "./Chatbot.css";

const ChatbotComponent = () => {
  const [showBot, toggleBot] = useState(false);

  const toggleChatbot = () => {
    toggleBot((prev) => !prev);
  };

  return (
    <div className="chatbot_main">
      {showBot && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
      <button
        onClick={toggleChatbot}
        style={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: "1",
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
        }}
      >
        {showBot ? (
          <IoIosArrowDown 
          style={{
            width: "60px",
            height: "60px",
            bottom: "-14rem",
            right: "10px",
            position: "fixed",
          }}
          />
        ) : (
          <img
            src={chatbotImg}
            alt="Chatbot"
            style={{
              width: "60px",
              height: "60px",
              bottom: "-21rem",
              right: "10px",
              position: "fixed",
            }}
          />
        )}
      </button>
    </div>
  );
};

export default ChatbotComponent;
