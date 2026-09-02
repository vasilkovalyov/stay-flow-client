'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { MailCheckIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';

import { RootForm } from '@/components/forms';
import { ErrorFrame, LightOverlay } from '@/components/shared';
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

import { PAGES, REGISTRATION_EMAIL_COOKIE_NAME } from '@/constants';

import { deleteCookie, getCookies } from '@/utils';

import { AuthSuccessDialog } from '../../dialogs';
import { emailVerification, emailVerificationCode } from './email-verification-form.api';
import { defaultValues } from './email-verification-form.constant';
import { EmailVerificationFormValues } from './email-verification-form.type';
import { schemaValidation } from './email-verification-form.validation';

export function EmailVerificationForm() {
  const router = useRouter();

  const email = getCookies(REGISTRATION_EMAIL_COOKIE_NAME)!;

  const [error, setError] = useState<string | null>(null);
  const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
  const methods = useForm<EmailVerificationFormValues>({
    resolver: zodResolver(schemaValidation),
    defaultValues: defaultValues,
  });

  const emailVerificationMutation = useMutation({
    mutationFn: emailVerification,
    onSuccess: () => {
      setIsOpenDialog(true);
    },
    onError: (e) => {
      if (e instanceof Error) {
        setError(e.message);
      }
    },
  });

  const emailVerificationCodeMutation = useMutation({
    mutationFn: emailVerificationCode,
  });

  function onSubmit(values: EmailVerificationFormValues) {
    emailVerificationMutation.mutate({
      email: email,
      code: values.code,
    });
  }

  function onResendCode() {
    emailVerificationCodeMutation.mutate({
      email: email,
    });
  }

  function onClose() {
    deleteCookie(REGISTRATION_EMAIL_COOKIE_NAME);

    router.push(PAGES.login);
  }

  return (
    <>
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
        {error && <ErrorFrame>{error}</ErrorFrame>}
        <Button
          type="submit"
          className="w-full"
          size="lg"
          data-testid="submit"
          disabled={emailVerificationMutation.isPending}
        >
          <MailCheckIcon size={16} />
          Verify email
        </Button>

        <p className="text-center text-muted-foreground">
          Didn`t receive it?{' '}
          <Button type="button" variant="link" className="font-normal p-0!" onClick={onResendCode}>
            Resend code
          </Button>
        </p>
      </RootForm>
      <AuthSuccessDialog open={isOpenDialog} email={email} onClose={onClose} />
    </>
  );
}
