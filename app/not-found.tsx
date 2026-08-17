import Link from 'next/link';

import { Home } from 'lucide-react';

import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="grid gap-[10px] text-center">
        <p className="text-[128px] font-extrabold text-destructive/20 leading-none">404</p>
        <h1>Page not found</h1>
        <p className="text-muted-foreground max-w-[336px] mb-[14px]">
          Oops! The page you`re looking for doesn`t exist or has been moved.
        </p>
        <div className="flex justify-center gap-[10px]">
          <Button size="lg" render={<Link href="/" />}>
            <Home />
            Try Again
          </Button>
          <Button size="lg" variant="outline" render={<Link href="/" />}>
            Browse Properties
          </Button>
        </div>
      </div>
    </div>
  );
}
