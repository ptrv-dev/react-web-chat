import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/Navbar';

const RootLayout: React.FC = () => {
  return (
    <div className="flex items-stretch h-screen">
      <Navbar />
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
