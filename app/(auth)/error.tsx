'use client';

import { useEffect } from 'react';

import { SectionError } from '@/components/sections';

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <SectionError retry={retry} />
    </div>
  );
}
