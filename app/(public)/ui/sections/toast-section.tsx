'use client';

import { Button, Toaster, toast } from '@/components/ui';

export function ToastSection() {
  return (
    <div className="space-y-[14px]">
      <h3 className="font-semibold text-muted-foreground">Toast</h3>
      <div className="flex flex-wrap gap-[10px]">
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              title: 'Reservation confirmed',
              description: 'Your booking for Room 204 has been confirmed.',
              type: 'success',
            })
          }
        >
          Show success toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              title: 'Something went wrong',
              description: 'We could not process your request. Please try again.',
              type: 'error',
            })
          }
        >
          Show error toast
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              title: 'Heads up',
              description: 'Check-out time has been updated to 11:00 AM.',
              type: 'info',
            })
          }
        >
          Show info toast
        </Button>
      </div>
      <Toaster />
    </div>
  );
}
