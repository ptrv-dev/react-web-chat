import React from 'react';
import { ChevronRight } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container">
        <div className="max-w-md w-full px-4 py-16 md:px-8 rounded-lg bg-gray-900">
          <h1 className="text-4xl text-center mb-2">Welcome back!</h1>
          <p className="text-center mb-8 text-gray-500">
            Please login in your account to continue
          </p>
          <div className="mb-4">
            <Label className="mb-2" htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="example@mail.com" />
          </div>
          <div className="mb-8">
            <Label className="mb-2" htmlFor="password">
              Password
            </Label>
            <Input id="password" placeholder="••••••••••" />
          </div>
          <Button variant={'default'} className="flex mx-auto w-40">
            Sign In <ChevronRight size={16} />
          </Button>
          <p className="text-sm mt-4 text-center">
            No account yet?&nbsp;
            <Link className="text-blue-500 hover:underline" to="/sign-up">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
