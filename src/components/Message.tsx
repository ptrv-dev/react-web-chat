import React from 'react';

interface IProps {
  self?: boolean;
  username: string;
  message: string;
  time: Date;
}

const Message: React.FC<IProps> = ({ message, time, username, self }) => {
  return (
    <div className={'flex flex-col'} title={time.toLocaleString('ru-RU')}>
      <span className="text-sm ml-4">{username}</span>
      <div
        className={`${
          self ? 'bg-blue-500' : 'bg-gray-800'
        } px-4 py-2 rounded-full`}
      >
        {message}
      </div>
    </div>
  );
};

export default Message;
