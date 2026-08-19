import { TwoFactorAuthForm } from '@/features/auth/components';

import { AuthLayout } from '@/components/layouts';

export default function TwoFactorAuth() {
  return (
    <AuthLayout
      title="Two-factor authentication"
      subtitle="Enter the code from your authenticator app."
    >
      <TwoFactorAuthForm />
    </AuthLayout>
  );
}
