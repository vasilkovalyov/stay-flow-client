import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { EmailVerificationForm } from '@/features/auth/components';

import { AuthLayout } from '@/components/layouts';

import { PAGES, REGISTRATION_EMAIL_COOKIE_NAME } from '@/constants';

export default async function EmailVerificationPage() {
  const cookieStore = await cookies();
  const email = cookieStore.get(REGISTRATION_EMAIL_COOKIE_NAME)?.value;

  if (!email) {
    redirect(PAGES.registration);
  }

  return (
    <AuthLayout title="Verify your email" subtitle={`We sent a 6-digit code to ${email}`}>
      <EmailVerificationForm />
    </AuthLayout>
  );
}
