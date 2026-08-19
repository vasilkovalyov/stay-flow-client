import { ForgotPasswordForm } from '@/features/auth/components';

import { AuthLayout } from '@/components/layouts';

export default function ForgotPassword() {
  return (
    <AuthLayout
      title="Forgot your password?"
      subtitle="Enter your email and we'll send you a reset link."
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
