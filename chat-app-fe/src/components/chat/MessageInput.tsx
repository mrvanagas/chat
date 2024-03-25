import React from 'react';

interface MessageInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ value, onChange }) => {
  return (
    <input
      type='text'
      className='flex-1 border-2 border-gray-300 p-2 rounded-md'
      placeholder='Type a message...'
      value={value}
      onChange={onChange}
    />
  );
};

export default MessageInput;
