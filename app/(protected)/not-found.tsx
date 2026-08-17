import { SectionNotFound } from '@/components/sections';

import { PROTECTED_PAGES } from '@/constants';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6">
      <SectionNotFound
        fisrtLink={{
          href: PROTECTED_PAGES.dashboard,
          text: 'Go to dashboard',
        }}
      />
    </div>
  );
}
