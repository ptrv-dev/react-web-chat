import React, { useEffect, useRef, useState } from 'react';
import { SendHorizonal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Message from '@/components/Message';

const HomePage: React.FC = () => {
  const [message, setMessage] = useState('');
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current?.scroll({ top: 999999 });
  }, []);

  return (
    <div className="h-full flex flex-col">
      <div
        ref={messagesRef}
        className="p-4 flex flex-col gap-4 items-start h-full overflow-y-auto custom-scroll"
      >
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message username="user" message="Hello world!" time={new Date()} />
        <Message
          self
          username="user"
          message="Hello world!"
          time={new Date()}
        />
      </div>
      <div className="p-4 bg-gray-950 flex items-center gap-2">
        <Input
          placeholder="Enter your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button size={'icon'} className="hover:text-blue-500">
          <SendHorizonal size={16} />
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
