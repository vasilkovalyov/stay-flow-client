import { SignUpForm } from '@/features/auth/components';

import { AuthLayout } from '@/components/layouts';

export default function SignUp() {
  return (
    <AuthLayout title="Create your account" subtitle="Join 2.4M+ travelers on StayFlow">
      <SignUpForm />
    </AuthLayout>
  );
}
