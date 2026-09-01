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

interface ForgotPasswordDialogProps {
  open?: boolean;
  email: string;
  onClose: () => void;
}

export function ForgotPasswordDialog({ open = false, email, onClose }: ForgotPasswordDialogProps) {
  return (
    <Dialog open={open}>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <div className="flex justify-center mb-[10px]">
            <BadgeCheck size={48} className="text-primary" />
          </div>
          <DialogTitle className="text-center">Check your email</DialogTitle>
          <DialogDescription className="text-center">
            We’ve sent a password reset link to your <span className="font-bold">{email}</span>{' '}
            address. Please check your inbox and follow the instructions to reset your password.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-center">
          <Button type="submit" onClick={onClose} className="w-[100px]">
            Got it
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
