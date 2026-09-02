'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ApiError } from '@/lib/api-error';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LogInIcon, MailIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { FormField, RootForm } from '@/components/forms';
import { ErrorFrame } from '@/components/shared';
import { Button, FieldSeparator } from '@/components/ui';

import { PAGES, PROTECTED_PAGES, TANSTACK_QUERY_KEY } from '@/constants';

import { setCookie } from '@/utils';

import { EMAIL_COOKIE_EXPIRATION } from '../registration-form/registration-form.constant';
import { defaultValues } from './login-form.constant';
import { LoginFormValues } from './login-form.type';
import { schemaValidation } from './login-form.validation';
import { login } from './login.api';

export function LoginForm() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [error, setError] = useState<string | null>(null);
  const [isErrorEmailVerification, setIsErrorEmailVerification] = useState<boolean>(false);
  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(schemaValidation),
    defaultValues: defaultValues,
  });

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [TANSTACK_QUERY_KEY.getMe],
      });

      router.push(PROTECTED_PAGES.dashboard);
    },
    onError: (e, { email }) => {
      if (e instanceof ApiError) {
        setError(e.message);
        if (e.status === 403) {
          setIsErrorEmailVerification(true);
        }
        setCookie(email, EMAIL_COOKIE_EXPIRATION);
      }
    },
  });

  function onSubmit(values: LoginFormValues) {
    setError(null);
    setIsErrorEmailVerification(false);

    loginMutation.mutate({
      email: values.email,
      password: values.password,
    });
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit} className="flex flex-col gap-[21px]">
      <FormField
        type="input"
        name="email"
        label="Email"
        placeholder="Email"
        icon={<MailIcon />}
        autoComplete="email"
        data-testid="email"
      />
      <FormField
        type="password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        autoComplete="current-password"
        data-testid="password"
      />
      <div className="flex items-center justify-between">
        {/* <FormField
          type="checkbox"
          name="rememberMe"
          label="Remember me"
          data-testid="remember-me"
        /> */}
        <Link href={PAGES.forgotPassword} className="text-primary hover:underline">
          Forgot password?
        </Link>
      </div>
      {error && (
        <>
          <ErrorFrame>{error}</ErrorFrame>
          {isErrorEmailVerification && (
            <div className="text-center mt-[10px]">
              <Link href={PAGES.emailVerification} className="text-primary hover:underline">
                Go to verification
              </Link>
            </div>
          )}
        </>
      )}
      <Button
        type="submit"
        className="w-full"
        size="lg"
        data-testid="submit"
        disabled={loginMutation.isPending}
      >
        <LogInIcon size={16} />
        Sign in
      </Button>
      <FieldSeparator>or continue with</FieldSeparator>

      <p className="text-center text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link href={PAGES.registration} className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </RootForm>
  );
}
