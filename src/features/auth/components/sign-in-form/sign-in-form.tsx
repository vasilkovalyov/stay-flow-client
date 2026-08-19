'use client';

import { useState } from 'react';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { LogInIcon, MailIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { FormField, RootForm } from '@/components/forms';
import { LightOverlay } from '@/components/shared';
import { Button, FieldSeparator } from '@/components/ui';

import { PAGES } from '@/constants';

import { defaultValues } from './sign-in-form.constant';
import { SignInFormValues } from './sign-in-form.type';
import { signIn } from './sign-in-form.utils';
import { schemaValidation } from './sign-in-form.validation';

export function SignInForm() {
  const [hasError, setHasError] = useState(false);
  const methods = useForm<SignInFormValues>({
    resolver: zodResolver(schemaValidation),
    defaultValues: defaultValues,
  });

  async function onSubmit(values: SignInFormValues) {
    try {
      await signIn();
    } catch {
      setHasError(true);
    }
    console.log(values);
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit} className="flex flex-col gap-[21px]">
      <FormField
        type="input"
        name="email"
        label="Email"
        placeholder="you@example.com"
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
        <FormField
          type="checkbox"
          name="rememberMe"
          label="Remember me"
          data-testid="remember-me"
        />
        <Link href={PAGES.forgotPassword} className="text-primary hover:underline">
          Forgot password?
        </Link>
      </div>

      {hasError && (
        <LightOverlay className="p-[10px]" background="error">
          <p className="text-destructive text-center">User not found</p>
        </LightOverlay>
      )}

      <Button type="submit" className="w-full" size="lg" data-testid="submit">
        <LogInIcon size={16} />
        Sign in
      </Button>
      <FieldSeparator>or continue with</FieldSeparator>

      <p className="text-center text-muted-foreground">
        Don&apos;t have an account?{' '}
        <Link href={PAGES.signUp} className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </RootForm>
  );
}
