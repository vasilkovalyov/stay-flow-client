'use client';

import Link from 'next/link';

import { zodResolver } from '@hookform/resolvers/zod';
import { ChevronLeft, MailIcon, SendIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { FormField, RootForm } from '@/components/forms';
import { Button } from '@/components/ui';

import { PAGES } from '@/constants';

import { defaultValues } from './forgot-password-form.constant';
import { ForgotPasswordFormValues } from './forgot-password-form.type';
import { forgotPassword } from './forgot-password-form.utils';
import { schemaValidation } from './forgot-password-form.validation';

export function ForgotPasswordForm() {
  const methods = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(schemaValidation),
    defaultValues: defaultValues,
  });

  async function onSubmit(values: ForgotPasswordFormValues) {
    try {
      await forgotPassword();
    } catch {}
    console.log(values);
  }

  return (
    <RootForm methods={methods} onSubmit={onSubmit} className="flex flex-col gap-[21px]">
      <FormField
        type="input"
        name="email"
        label="Email address"
        placeholder="you@example.com"
        icon={<MailIcon />}
        autoComplete="email"
        data-testid="email"
      />

      <Button type="submit" className="w-full" size="lg" data-testid="submit">
        <SendIcon size={16} />
        Send reset link
      </Button>

      <p className="flex items-center justify-center gap-[6px] text-center">
        <ChevronLeft size={18} />
        <Link href={PAGES.login} className="font-semibold">
          Back to sign in
        </Link>
      </p>
    </RootForm>
  );
}
