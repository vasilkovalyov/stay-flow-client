'use client';

import Link from 'next/link';

import { MessageCircle } from 'lucide-react';

export function UserMessages() {
  const hasMessages = true;

  return (
    <div>
      <Link
        href="/"
        className="relative size-[32px] rounded-xl flex items-center justify-center hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
      >
        {hasMessages && (
          <span className="absolute size-[8px] bg-primary rounded-full top-[2px] right-[2px]" />
        )}
        <MessageCircle size={20} />
      </Link>
    </div>
  );
}
