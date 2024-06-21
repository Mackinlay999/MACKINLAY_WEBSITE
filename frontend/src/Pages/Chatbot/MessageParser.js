import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      actions.handleHello();
    } else if (lowerCaseMessage.includes("contact")) {
      actions.handleContact(message);
    } else if (lowerCaseMessage.includes("hr connect pro")) {
      actions.handleHrConnectPro(message);
    } else if (lowerCaseMessage.includes("connect era")) {
      actions.handleHrConnectEra(message);
    } else if  (lowerCaseMessage.includes("product") || lowerCaseMessage.includes("products")) {
      actions.handleProduct(message);
    } else {
      actions.handleReject();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
