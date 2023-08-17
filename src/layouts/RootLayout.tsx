import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import { $axios } from '@/axios';
import { Loader2 } from 'lucide-react';

const RootLayout: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const navigator = useNavigate();

  async function checkLogin() {
    try {
      const res = await $axios.get('/auth/me');
      console.log(res);
      setLoading(false);
    } catch {
      navigator('/sign-in');
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" size={64} />
      </div>
    );

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
