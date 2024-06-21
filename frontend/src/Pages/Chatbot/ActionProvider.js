import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleReject = () => {
    const botMessage = createChatBotMessage(
      "please ask the question related to this website, or you might have typo in your message"
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleContact = async () => {
    const botMessage = createChatBotMessage("contactus@mackinlay.in");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleProduct = () => {
    const steps = [
      "we have two products on stage",
      "The first one is HR CONNECT PRO",
      "The second is the CONNECT ERA",
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        const botMessage = createChatBotMessage(step);
        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage],
        }));
      }, 1000 * index); 
    });
  };

  const handleHrConnectPro = async () => {
    const botMessage = createChatBotMessage(
      "It is basically a job application where the you can apply for job as job seeker or be a employer to hire employess."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleHrConnectEra = async () => {
    const botMessage = createChatBotMessage(
      "It is basically a dating application where couples meet together and make friendship or be love buds."
    );
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleReject,
            handleContact,
            handleHrConnectPro,
            handleHrConnectEra,
            handleProduct,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
