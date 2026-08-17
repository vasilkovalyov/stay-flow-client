import Link from 'next/link';

import { Bell } from 'lucide-react';

export function UserNotifications() {
  const notifications = 3;

  return (
    <Link
      href="/"
      className="relative size-[32px] rounded-xl flex items-center justify-center hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
    >
      {notifications && (
        <span className="absolute top-0 right-0 size-[16px] bg-primary rounded-full text-[10px] font-bold text-light flex items-center justify-center">
          {notifications}
        </span>
      )}
      <Bell size={20} />
    </Link>
  );
}
