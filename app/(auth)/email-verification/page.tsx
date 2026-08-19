import { EmailVerificationForm } from '@/features/auth/components';

import { AuthLayout } from '@/components/layouts';

export default function EmailVerification() {
  return (
    <AuthLayout title="Verify your email" subtitle="We sent a 6-digit code to alex@stayflow.com">
      <EmailVerificationForm />
    </AuthLayout>
  );
}
