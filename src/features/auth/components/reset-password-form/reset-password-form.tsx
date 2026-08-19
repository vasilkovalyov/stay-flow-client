'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { KeyRoundIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { FormField, RootForm } from '@/components/forms';
import { Button } from '@/components/ui';

import { PasswordRequirements } from '../password-requirments';
import { defaultValues } from './reset-password-form.constant';
import { ResetPasswordFormValues } from './reset-password-form.type';
import { resetPassword } from './reset-password-form.utils';
import { schemaValidation } from './reset-password-form.validation';

export function ResetPasswordForm() {
  const methods = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(schemaValidation),
    defaultValues: defaultValues,
  });

  async function onSubmit(values: ResetPasswordFormValues) {
    try {
      await resetPassword();
    } catch {}
    console.log(values);
  }

  return (
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
      <Button type="submit" className="w-full" size="lg" data-testid="submit">
        <KeyRoundIcon size={16} />
        Reset password
      </Button>
    </RootForm>
  );
}
