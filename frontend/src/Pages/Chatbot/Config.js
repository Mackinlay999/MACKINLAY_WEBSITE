import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';

const botName = 'Mackinlay Bot';

const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
  customComponents: {
    ActionProvider: ActionProvider,
    MessageParser: MessageParser,
  },
};

export default config;
