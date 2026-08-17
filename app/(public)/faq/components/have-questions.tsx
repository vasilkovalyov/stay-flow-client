import Link from 'next/link';

import { LightOverlay } from '@/components/shared';
import { Button } from '@/components/ui';

import { PAGES } from '@/constants';

export function HaveQuestions() {
  return (
    <LightOverlay className="text-center p-[32px]" background="secondary">
      <h2 className="text-sm font-bold mb-[8px]">Still have questions?</h2>
      <p className="text-muted-foreground mb-[16px]">Our support team is always here to help.</p>
      <Button nativeButton={false} render={<Link href={PAGES.contact} />}>
        Contact Support
      </Button>
    </LightOverlay>
  );
}
