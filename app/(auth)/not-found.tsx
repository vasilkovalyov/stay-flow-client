import { SectionNotFound } from '@/components/sections';

import { PAGES } from '@/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
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
  );
}
