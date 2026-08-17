import { ArrowRight } from 'lucide-react';

import { LightOverlay } from '@/components/shared';
import { Button } from '@/components/ui';

export function BecomeHost() {
  return (
    <section>
      <LightOverlay className="p-[16px] text-center p-[48px]" radius="xl">
        <h2 className="text-[30px] font-extrabold mb-[12px]">Want to be part of it?</h2>
        <p className="text-sm text-muted-foreground mb-[24px]">
          List your property and start hosting guests from around the world.
        </p>
        <Button size="lg">
          Become a Host <ArrowRight />
        </Button>
      </LightOverlay>
    </section>
  );
}
