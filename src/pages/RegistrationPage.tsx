import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle, ChevronRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';
import { signUp } from '@/api/auth';

const formSchema = z.object({
  username: z
    .string()
    .min(4, 'Username must be more than 4 symbols')
    .max(64, 'Username must be less than 64 symbols'),
  email: z.string().email('Enter a valid email!'),
  password: z
    .string()
    .min(4, 'Password must be more than 4 symbols')
    .max(64, 'Password must be less than 64 symbols'),
});

const LoginPage: React.FC = () => {
  const navigator = useNavigate();
  const { toast } = useToast();
  const [isError, setError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const success = await signUp(
      values.username,
      values.email,
      values.password
    );
    if (!success) return setError(true);
    toast({ description: 'Your account has been created successfully!' });
    return navigator('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto max-w-md w-full px-4 py-16 md:px-8 rounded-lg bg-gray-900"
          >
            <h1 className="text-4xl text-center mb-2">Create Account</h1>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="john" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mb-8">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="••••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {isError && (
              <Alert variant="destructive" className="-mt-4 mb-8">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>This email is already taken</AlertTitle>
              </Alert>
            )}
            <Button type="submit" className="flex mx-auto w-40">
              Sign Up <ChevronRight size={16} />
            </Button>
            <p className="text-sm mt-4 text-center">
              Already have an account?&nbsp;
              <Link className="text-blue-500 hover:underline" to="/sign-in">
                Sign In
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
