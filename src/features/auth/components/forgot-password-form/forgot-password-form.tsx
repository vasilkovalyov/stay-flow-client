'use client';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { ChevronLeft, MailIcon, SendIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { FormField, RootForm } from '@/components/forms';
import { ErrorFrame, LightOverlay } from '@/components/shared';
import { Button } from '@/components/ui';

import { PAGES } from '@/constants';

import { ForgotPasswordDialog } from '../../dialogs';
import { forgotPasswordApi } from './forgot-password-form.api';
import { defaultValues } from './forgot-password-form.constant';
import { ForgotPasswordFormValues } from './forgot-password-form.type';
import { schemaValidation } from './forgot-password-form.validation';

export function ForgotPasswordForm() {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const methods = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(schemaValidation),
    defaultValues: defaultValues,
  });

  const forgotPasswordMutation = useMutation({
    mutationFn: forgotPasswordApi,
    onSuccess: () => {
      setIsOpenDialog(true);
    },
    onError: (e) => {
      if (e instanceof Error) {
        setError(e.message);
      }
    },
  });

  function onSubmit(values: ForgotPasswordFormValues) {
    setEmail(values.email);
    forgotPasswordMutation.mutate({
      email: values.email,
    });
  }

  function onClose() {
    router.push(PAGES.home);
  }

  return (
    <>
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
        {error && <ErrorFrame>{error}</ErrorFrame>}
        <Button
          type="submit"
          className="w-full"
          size="lg"
          data-testid="submit"
          disabled={forgotPasswordMutation.isPending}
        >
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
      <ForgotPasswordDialog open={isOpenDialog} email={email} onClose={onClose} />
    </>
  );
}
