import React from 'react';

interface IProps {
  username: string;
  message: string;
  selected?: boolean;
}

const ChatItem: React.FC<IProps> = ({ message, username, selected }) => {
  return (
    <div className="bg-gray-800 p-4 -mx-4 flex items-center gap-4 cursor-pointer hover:bg-opacity-90 relative">
      {selected && (
        <div className="absolute top-0 left-0 h-full w-2 bg-blue-500"></div>
      )}
      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center uppercase text-sm">
        {username.slice(0, 2)}
      </div>
      <div>
        <strong className="text-xl font-medium mb-2">{username}</strong>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ChatItem;
