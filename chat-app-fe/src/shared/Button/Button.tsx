import React from 'react';

interface SendButtonProps {
  onClick: () => void;
}

const SendButton: React.FC<SendButtonProps> = ({ onClick }) => {
  return (
    <button
      className='ml-2 bg-blue-500 text-white p-2 rounded-lg'
      onClick={onClick}
    >
      Send
    </button>
  );
};

export default SendButton;
