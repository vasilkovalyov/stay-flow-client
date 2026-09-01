'use client';

import { useState } from 'react';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { MailIcon, UserPlusIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { FormField, RootForm } from '@/components/forms';
import { LightOverlay } from '@/components/shared';
import { Button } from '@/components/ui';

import { PAGES } from '@/constants';

import { PasswordRequirements } from '../password-requirments';
import { defaultValues } from './sign-up-form.constant';
import { SignUpFormValues } from './sign-up-form.type';
import { signUp } from './sign-up-form.utils';
import { schemaValidation } from './sign-up-form.validation';

export function SignUpForm() {
  const [hasError, setHasError] = useState(false);

  const methods = useForm<SignUpFormValues>({
    resolver: zodResolver(schemaValidation),
    defaultValues: defaultValues,
  });

  async function onSubmit(values: SignUpFormValues) {
    try {
      await signUp();
    } catch {
      setHasError(true);
    }
    console.log(values);
  }

  return (
    <RootForm
      methods={methods}
      onSubmit={onSubmit}
      className="flex flex-wrap justify-between gap-[12px]"
    >
      <div className="w-full sm:w-[calc(50%_-_6px)]">
        <FormField
          type="input"
          name="firstName"
          label="First name"
          placeholder="First name"
          autoComplete="given-name"
          data-testid="first-name"
        />
      </div>
      <div className="w-full sm:w-[calc(50%_-_6px)]">
        <FormField
          type="input"
          name="lastName"
          label="Last name"
          placeholder="Last name"
          autoComplete="family-name"
          data-testid="last-name"
        />
      </div>
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
        placeholder="Create a password"
        description={<PasswordRequirements />}
        autoComplete="new-password"
        data-testid="password"
      />
      <FormField
        type="password"
        name="confirmPassword"
        label="Confirm password"
        placeholder="Repeat your password"
        autoComplete="new-password"
        data-testid="confirm-password"
      />
      <FormField
        type="checkbox"
        name="terms"
        data-testid="terms"
        label={
          <span>
            I agree to the{' '}
            <Link href={PAGES.terms} className="text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href={PAGES.privacy} className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </span>
        }
      />

      {hasError && (
        <LightOverlay className="p-[10px] w-full" background="error">
          <p className="text-destructive text-center">User already exist</p>
        </LightOverlay>
      )}

      <Button type="submit" className="w-full" size="lg" data-testid="submit">
        <UserPlusIcon size={16} />
        Create account
      </Button>
      <p className="w-full text-center text-muted-foreground">
        Already have an account?{' '}
        <Link href={PAGES.login} className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </RootForm>
  );
}
