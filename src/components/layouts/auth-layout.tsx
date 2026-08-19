import { PropsWithChildren } from 'react';

import { HomeIcon } from 'lucide-react';

import { LightOverlay } from '../shared';

interface AuthLayout extends PropsWithChildren {
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayout) {
  return (
    <div>
      <div className="text-center mb-[32px]">
        <div className="size-[48px] bg-primary rounded-2xl flex items-center justify-center mx-auto mb-[16px] shadow-md text-light">
          <HomeIcon />
        </div>
        <h1 className="text-[24px] font-extrabold mb-[8px]">{title}</h1>
        <p className="text-muted-foreground">{subtitle}</p>
      </div>
      <LightOverlay className="p-[32px] shadow-sm">{children}</LightOverlay>
    </div>
  );
}
