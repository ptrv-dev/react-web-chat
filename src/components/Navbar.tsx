import React, { useState } from 'react';
import { Input } from './ui/input';
import ChatItem from './ChatItem';

const Navbar: React.FC = () => {
  const [query, setQuery] = useState('');
  return (
    <div className="w-96 h-full bg-gray-900 p-4">
      <Input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-4"
      />
      {query && <h3 className="text-xl">Search by «‎{query}»‎</h3>}
      <div className="flex flex-col mt-4">
        <ChatItem username="user" message="Hello world!" selected />
      </div>
    </div>
  );
};

export default Navbar;
