import Link from 'next/link';

import { RefreshCw } from 'lucide-react';

import { Button } from '@/components/ui';

interface SectionErrorProps {
  retry: () => void;
}

export function SectionError({ retry }: SectionErrorProps) {
  return (
    <section>
      <div className="container">
        <div className="grid gap-[10px] text-center">
          <p className="text-[112px] font-extrabold text-destructive/20 leading-none">500</p>
          <h1>Server error</h1>
          <p className="text-muted-foreground max-w-[336px] mb-[14px]">
            Something went wrong on our end. Our team has been notified and is working on a fix.
          </p>
          <div className="flex justify-center gap-[10px]">
            <Button size="lg" onClick={retry}>
              <RefreshCw />
              Try Again
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/" />}>
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
