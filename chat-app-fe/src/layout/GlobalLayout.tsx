import React, { useState } from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatOutput from '../components/chat/ChatOutput';
import MessageInput from '../components/chat/MessageInput';
import SendButton from '../shared/Button/Button';

const GlobalLayout: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const sendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(e.target.value);
  };

  return (
    <div className='flex flex-col h-screen'>
      <ChatHeader />
      <div className='flex-1 overflow-auto'>
        <ChatOutput messages={messages} />
      </div>
      <div className='flex items-center p-4'>
        <MessageInput value={currentMessage} onChange={handleInputChange} />
        <SendButton onClick={sendMessage} />
      </div>
    </div>
  );
};

export default GlobalLayout;
