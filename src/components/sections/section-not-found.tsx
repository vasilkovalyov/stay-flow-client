import Link from 'next/link';

import { Home } from 'lucide-react';

import { Button } from '@/components/ui';

interface SectionNotFoundLink {
  href: string;
  text: string;
}

interface SectionNotFoundProps {
  fisrtLink: SectionNotFoundLink;
  secondLink?: SectionNotFoundLink;
}

export function SectionNotFound({ fisrtLink, secondLink }: SectionNotFoundProps) {
  return (
    <section>
      <div className="container">
        <div className="grid gap-[10px] text-center">
          <p className="text-[128px] font-extrabold text-destructive/20 leading-none">404</p>
          <h1>Page not found</h1>
          <p className="text-muted-foreground max-w-[336px] mb-[14px]">
            Oops! The page you`re looking for doesn`t exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-[10px]">
            <Button size="lg" nativeButton={false} render={<Link href={fisrtLink.href} />}>
              <Home />
              {fisrtLink.text}
            </Button>
            {secondLink && (
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<Link href={secondLink.href} />}
              >
                {secondLink.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
