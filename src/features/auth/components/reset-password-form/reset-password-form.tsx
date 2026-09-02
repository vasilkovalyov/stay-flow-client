'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { KeyRoundIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { FormField, RootForm } from '@/components/forms';
import { ErrorFrame, PasswordRequirements } from '@/components/shared';
import { Button } from '@/components/ui';

import { PAGES } from '@/constants';

import { ResetPasswordSuccessDialog } from '../../dialogs';
import { resetPasswordApi } from './reset-password-form.api';
import { defaultValues } from './reset-password-form.constant';
import { ResetPasswordFormValues } from './reset-password-form.type';
import { schemaValidation } from './reset-password-form.validation';

interface ResetPasswordFormProps {
  token: string;
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);

  const methods = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(schemaValidation),
    defaultValues: defaultValues,
  });

  const resetPasswordMutation = useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: () => {
      setIsOpenDialog(true);
    },
    onError: (e: Error) => {
      if (e instanceof Error) {
        setError(e.message);
      }
    },
  });

  function onSubmit(values: ResetPasswordFormValues) {
    resetPasswordMutation.mutate({
      token: token,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });
  }

  function onClose() {
    router.push(PAGES.home);
  }

  return (
    <>
      <RootForm methods={methods} onSubmit={onSubmit} className="flex flex-col gap-[21px]">
        <FormField
          type="password"
          name="password"
          label="New password"
          placeholder="Enter new password"
          autoComplete="new-password"
          description={<PasswordRequirements />}
          data-testid="password"
        />
        <FormField
          type="password"
          name="confirmPassword"
          label="Confirm new password"
          placeholder="Repeat new password"
          autoComplete="new-password"
          data-testid="confirm-password"
        />
        {error && <ErrorFrame>{error}</ErrorFrame>}
        <Button
          type="submit"
          className="w-full"
          size="lg"
          data-testid="submit"
          disabled={resetPasswordMutation.isPending}
        >
          <KeyRoundIcon size={16} />
          Reset password
        </Button>
      </RootForm>
      <ResetPasswordSuccessDialog open={!isOpenDialog} onClose={onClose} />
    </>
  );
}
