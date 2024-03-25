import React from 'react';

interface ChatOutputProps {
  messages: string[];
}

const ChatOutput: React.FC<ChatOutputProps> = ({ messages }) => {
  return (
    <div className='p-4 space-y-2'>
      {messages.map((message, index) => (
        <div key={index} className='p-2 rounded-lg'>
          {message}
        </div>
      ))}
    </div>
  );
};

export default ChatOutput;
