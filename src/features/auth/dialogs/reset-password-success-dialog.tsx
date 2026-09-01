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

interface ResetPasswordSuccessDialogProps {
  open?: boolean;
  onClose: () => void;
}

export function ResetPasswordSuccessDialog({
  open = false,
  onClose,
}: ResetPasswordSuccessDialogProps) {
  return (
    <Dialog open={open}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <div className="flex justify-center mb-[10px]">
            <BadgeCheck size={48} className="text-primary" />
          </div>
          <DialogTitle className="text-center">Password reset successfully!</DialogTitle>
          <DialogDescription className="text-center">
            Your password has been reset successfully. You can now sign in with your new password.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center">
          <Button type="submit" onClick={onClose} className="w-[160px]">
            Continue to login
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
