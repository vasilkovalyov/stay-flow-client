import { ResetPasswordForm } from '@/features/auth/components';

import { AuthLayout } from '@/components/layouts';

export default function ResetPassword() {
  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Create a new secure password for your account."
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
}
