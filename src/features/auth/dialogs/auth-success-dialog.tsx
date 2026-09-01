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

interface AuthSuccessDialogProps {
  open?: boolean;
  email: string;
  onClose: () => void;
}

export function AuthSuccessDialog({ open = false, email, onClose }: AuthSuccessDialogProps) {
  return (
    <Dialog open={open}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <div className="flex justify-center mb-[10px]">
            <BadgeCheck size={48} className="text-primary" />
          </div>
          <DialogTitle className="text-center">Email verified successfully!</DialogTitle>
          <DialogDescription className="text-center">{email}</DialogDescription>
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
