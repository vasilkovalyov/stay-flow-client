'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { MailIcon, UserPlusIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { FormField, RootForm } from '@/components/forms';
import { LightOverlay } from '@/components/shared';
import { Button } from '@/components/ui';

import { PAGES } from '@/constants';

import { setCookie } from '@/utils';

import { PasswordRequirements } from '../password-requirments';
import { EMAIL_COOKIE_EXPIRATION, defaultValues } from './registration-form.constant';
import type { RegistrationFormValues } from './registration-form.type';
import { schemaValidation } from './registration-form.validation';
import { registration } from './registration.api';

export function RegistrationForm() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const methods = useForm<RegistrationFormValues>({
    resolver: zodResolver(schemaValidation),
    defaultValues: defaultValues,
  });

  const registrationMutation = useMutation({
    mutationFn: registration,
    onSuccess: async ({ success, data }) => {
      if (success) {
        setCookie(data.email, EMAIL_COOKIE_EXPIRATION);
        router.push(PAGES.emailVerification);
      }
    },
    onError: (e) => {
      if (e instanceof Error) {
        setError(e.message);
      }
    },
  });

  function onSubmit(values: RegistrationFormValues) {
    registrationMutation.mutateAsync({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    });
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

      {error && (
        <LightOverlay className="p-[10px] w-full" background="error">
          <p className="text-destructive text-center">{error}</p>
        </LightOverlay>
      )}

      <Button
        type="submit"
        className="w-full"
        size="lg"
        data-testid="submit"
        disabled={registrationMutation.isPending}
      >
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
