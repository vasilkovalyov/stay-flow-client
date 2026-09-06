import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        `
          flex field-sizing-content min-h-[82px] w-full
          resize-none
          rounded-xl border
          bg-input
          px-[16px] py-[10px]
          transition-[color,box-shadow,background-color]
          outline-none

          placeholder:text-muted-foreground

          focus-visible:border-border-strong

          disabled:cursor-not-allowed
          disabled:opacity-50

          aria-invalid:border-destructive
          aria-invalid:outline-2
          aria-invalid:outline-offset-2
          aria-invalid:outline-destructive
        `,
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
