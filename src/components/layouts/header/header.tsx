import Link from 'next/link';

import { UserDropdown, UserMessages, UserNotifications } from '@/features/auth/components';

import { AppLogo } from '@/components/shared';

import { PAGES } from '@/constants';

import { AuthButtons } from './components';

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-light border-b border-border py-[16px]">
      <div className="container">
        <div className="flex justify-between">
          <Link href={PAGES.home}>
            <AppLogo />
          </Link>
          <AuthButtons>
            <UserMessages />
            <UserNotifications />
            <UserDropdown />
          </AuthButtons>
        </div>
      </div>
    </header>
  );
}
