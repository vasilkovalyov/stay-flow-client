'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { MailCheckIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

import { RootForm } from '@/components/forms';
import { LightOverlay } from '@/components/shared';
import {
  Button,
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui';

import { defaultValues } from './email-verification-form.constant';
import { EmailVerificationFormValues } from './email-verification-form.type';
import { verification } from './email-verification-form.utils';
import { schemaValidation } from './email-verification-form.validation';

export function EmailVerificationForm() {
  const [hasError, setHasError] = useState(false);

  const methods = useForm<EmailVerificationFormValues>({
    resolver: zodResolver(schemaValidation),
    defaultValues: defaultValues,
  });

  async function onSubmit(values: EmailVerificationFormValues) {
    try {
      await verification();
    } catch {
      setHasError(true);
    }
    console.log(values);
  }

  return (
    <RootForm
      methods={methods}
      onSubmit={onSubmit}
      className="flex flex-col items-center gap-[21px]"
    >
      <Controller
        control={methods.control}
        name="code"
        render={({ field, fieldState }) => (
          <Field className="items-center" data-invalid={!!fieldState.error}>
            <FieldLabel htmlFor="form-otp" className="sr-only">
              Verification code
            </FieldLabel>
            <InputOTP
              maxLength={6}
              id="form-otp"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              data-testid="code"
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            {!fieldState.error && (
              <FieldDescription className="text-center">
                Enter the 6-digit code we sent to your email.
              </FieldDescription>
            )}
            <FieldError errors={fieldState.error ? [fieldState.error] : undefined} />
          </Field>
        )}
      />

      {hasError && (
        <LightOverlay className="p-[10px] w-full" background="error">
          <p className="text-destructive text-center">Invalid code</p>
        </LightOverlay>
      )}

      <Button type="submit" className="w-full" size="lg" data-testid="submit">
        <MailCheckIcon size={16} />
        Verify email
      </Button>

      <p className="flex items-center justify-center text-center text-muted-foreground">
        Didn`t receive it?
        <Button type="button" variant="link">
          Resend code
        </Button>
      </p>
    </RootForm>
  );
}
