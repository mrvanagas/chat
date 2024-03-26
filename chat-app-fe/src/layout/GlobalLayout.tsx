import React, { useEffect, useState } from 'react';
import ChatHeader from '../components/chat/ChatHeader';
import ChatOutput from '../components/chat/ChatOutput';
import MessageInput from '../components/chat/MessageInput';
import SendButton from '../shared/Button/Button';
import io from 'socket.io-client';

const socket = io('http://192.168.0.193:8888');

const GlobalLayout: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    socket.on('chat message', (msg: string) => {
      console.log('Message:', msg);
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  
    return () => {
      socket.off('chat message');
    };
  }, []);

  const sendMessage = () => {
    if (currentMessage.trim() !== '') {
      socket.emit('chat message', currentMessage);
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
