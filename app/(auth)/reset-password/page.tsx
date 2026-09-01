import { ResetPasswordForm } from '@/features/auth/components';

import { AuthLayout } from '@/components/layouts';

export default async function ResetPassword({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Create a new secure password for your account."
    >
      <ResetPasswordForm token={token || ''} />
    </AuthLayout>
  );
}
