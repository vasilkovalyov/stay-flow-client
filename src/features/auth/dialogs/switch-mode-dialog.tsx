'use client';

import { BadgeCheck } from 'lucide-react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui';

import { USER_ACTIVE_MODE } from '@/constants';

import { UserActiveModeType } from '@/types';

interface SwitchModeDialogProps {
  open?: boolean;
  activeMode: UserActiveModeType | null;
  onClose: () => void;
}

interface Content {
  title: string;
  description: string;
}

const dialogContentHostMode: Content = {
  title: 'Switch to hosting mode?',
  description: 'Switch to hosting mode to manage your properties and bookings as a host.',
};

const dialogContentGuestMode: Content = {
  title: 'Switch to guest mode?',
  description: 'Switch to guest mode to search for properties and manage your bookings.',
};

const dialogContent: Record<UserActiveModeType, Content> = {
  [USER_ACTIVE_MODE.GUEST]: dialogContentHostMode,
  [USER_ACTIVE_MODE.HOST]: dialogContentGuestMode,
};

export function SwitchModeDialog({ open = false, activeMode, onClose }: SwitchModeDialogProps) {
  if (!activeMode) {
    return null;
  }

  const content = dialogContent[activeMode];

  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <div className="flex justify-center mb-[10px]">
            <BadgeCheck size={48} className="text-primary" />
          </div>
          <DialogTitle className="text-center">{content.title}</DialogTitle>
          <DialogDescription className="text-center">{content.description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center">
          <Button type="submit" onClick={onClose} className="w-[100px]">
            Continue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
