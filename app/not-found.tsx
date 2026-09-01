import { PublicLayout } from '@/components/layouts';
import { SectionNotFound } from '@/components/sections';

import { PAGES } from '@/constants';

export default function NotFound() {
  return (
    <PublicLayout>
      <div className="pt-[40px] lg:pt-[80px] flex items-center justify-center text-center px-6">
        <SectionNotFound
          fisrtLink={{
            href: PAGES.home,
            text: 'Go Home',
          }}
          secondLink={{
            href: '/',
            text: 'Browse Properties',
          }}
        />
      </div>
    </PublicLayout>
  );
}
