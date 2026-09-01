import { LoginForm } from '@/features/auth/components/login';

import { AuthLayout } from '@/components/layouts';

export default function LoginPage() {
  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your StayFlow account">
      <LoginForm />
    </AuthLayout>
  );
}
