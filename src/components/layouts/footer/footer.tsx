import Link from 'next/link';

import { AppLogo } from '@/components/shared';
import { Separator } from '@/components/ui';

import { FOOTER_NAVIGATION } from './footer.constant';

export function Footer() {
  return (
    <footer className="bg-light border-t border-border mt-[40px] py-[20px] md:py-[48px] md:mt-[80px]">
      <div className="container">
        <div className="grid gap-[20px] md:gap-[40px]">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-[20px] items-start">
            <div className="grid gap-[16px]">
              <AppLogo size="sm" />
              <p className="text-muted-foreground leading-relaxed max-w-[286px]">
                Find your perfect stay anywhere in the world. Premium rentals, verified hosts,
                unforgettable experiences.
              </p>
            </div>
            {FOOTER_NAVIGATION.map(({ id, title, navigation }) => (
              <div key={id} className="grid gap-[12px]">
                <h5>{title}</h5>
                <ul className="grid gap-[8px]">
                  {navigation.map(({ href, text }, index) => (
                    <li key={`${href}-${index}`}>
                      <Link
                        href={href}
                        className="text-muted-foreground font-semibold transition-colors hover:text-foreground"
                      >
                        {text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} StayFlow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
