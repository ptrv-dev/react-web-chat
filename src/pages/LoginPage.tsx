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
import { signIn } from '@/api/auth';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  email: z.string().email('Enter a valid email!'),
  password: z
    .string()
    .min(4, 'Password must be more than 4 symbols')
    .max(255, 'Password must be less than 255 symbols'),
});

const LoginPage: React.FC = () => {
  const navigator = useNavigate();
  const { toast } = useToast();
  const [isError, setError] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const isAuth = await signIn(values.email, values.password);
    if (!isAuth) return setError(true);
    toast({ description: 'Success logged in!' });
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
            <h1 className="text-4xl text-center mb-2">Welcome back!</h1>
            <p className="text-center mb-8 text-gray-500">
              Please login in your account to continue
            </p>
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
                <AlertTitle>Invalid credentials</AlertTitle>
                <AlertDescription>
                  Email or password is incorrect
                </AlertDescription>
              </Alert>
            )}
            <Button type="submit" className="flex mx-auto w-40">
              Sign In <ChevronRight size={16} />
            </Button>
            <p className="text-sm mt-4 text-center">
              No account yet?&nbsp;
              <Link className="text-blue-500 hover:underline" to="/sign-up">
                Sign Up
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
