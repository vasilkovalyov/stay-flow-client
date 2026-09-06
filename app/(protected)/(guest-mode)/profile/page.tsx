import { ProfileForm } from '@/features/guest';

import { LightOverlay, PageHeading } from '@/components/shared';
import { Separator } from '@/components/ui';

export default function ProfilePage() {
  return (
    <div>
      <PageHeading title="My Profile" subtitle="Manage your personal information." />
      <div className="w-full md:max-w-[672px]">
        <LightOverlay className="p-[24px]">
          <Separator />
          <ProfileForm />
        </LightOverlay>
      </div>
    </div>
  );
}
