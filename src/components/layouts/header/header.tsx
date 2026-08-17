import Link from 'next/link';

import { UserDropdown, UserMessages, UserNotifications } from '@/features/auth/components';

import { AppLogo } from '@/components/shared';

import { AuthButtons } from './components';

export function Header() {
  const isAuth = true;

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-light border-b border-border py-[16px]">
      <div className="container">
        <div className="flex justify-between">
          <Link href="/">
            <AppLogo />
          </Link>
          <div className="flex gap-[8px] items-center">
            {isAuth ? (
              <AuthButtons />
            ) : (
              <>
                <UserMessages />
                <UserNotifications />
                <UserDropdown />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
