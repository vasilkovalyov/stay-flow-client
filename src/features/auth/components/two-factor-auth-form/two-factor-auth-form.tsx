'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ShieldCheckIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { FormField, RootForm } from '@/components/forms';
import { Button } from '@/components/ui';

import { defaultValues } from './two-factor-auth-form.constant';
import { TwoFactorAuthFormValues } from './two-factor-auth-form.type';
import { twoFactorAuth } from './two-factor-auth-form.utils';
import { schemaValidation } from './two-factor-auth-form.validation';

export function TwoFactorAuthForm() {
  const methods = useForm<TwoFactorAuthFormValues>({
    resolver: zodResolver(schemaValidation),
    defaultValues: defaultValues,
  });

  async function onSubmit(values: TwoFactorAuthFormValues) {
    try {
      await twoFactorAuth();
    } catch {}
    console.log(values);
  }

  return (
    <RootForm
      methods={methods}
      onSubmit={onSubmit}
      className="flex flex-col items-center gap-[21px]"
    >
      <FormField
        type="input"
        name="code"
        label="Authentication code"
        className="text-center text-sm font-semibold tracking-[1]"
        placeholder="000000"
        data-testid="code"
      />

      <Button type="submit" className="w-full" size="lg" data-testid="submit">
        <ShieldCheckIcon size={16} />
        Verify
      </Button>

      <Button type="button" variant="link">
        Use a recovery code instead
      </Button>
    </RootForm>
  );
}
