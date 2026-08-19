import { SignInForm } from '@/features/auth/components';

import { AuthLayout } from '@/components/layouts';

export default function SignIn() {
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your StayFlow account">
      <SignInForm />
    </AuthLayout>
  );
}
